
const bx= document.querySelector("#box"); 
const btn = document.querySelector("#btn"); 
const resetBtn = document.querySelector ("#reset-btn"); 

let xPos=0; 
let isPlaying = true;
let globalID; 

btn.addEventListener("click", playPause); 
resetBtn.addEventListener("click", resetAnimation); 

function moveCow() {
if(xPos < window.innerWidth){
xPos += 3; 
}else {
xPos = 0;   
}
bx.style.transform="translateX(" + xPos + "px)"; 
globalID = requestAnimationFrame(moveCow);   
}

function playPause(){
if(isPlaying){
cancelAnimationFrame(globalID); 
isPlaying =false; 
btn.innerHTML ="PLAY"; 
}else{
moveCow(); 
isPlaying = true; 
btn.innerHTML = "STOP"; 
}
}

function resetAnimation(){
cancelAnimationFrame(globalID); 
xPos = 0;
bx.style.transform ="translateX(" + xPos + "px)";  
isPlaying = true; 
btn.innerHTML = "STOP"; 
}
// Start the animation initially 
moveCow();