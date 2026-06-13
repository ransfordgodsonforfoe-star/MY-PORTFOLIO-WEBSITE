
// MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", ()=>{
nav.classList.toggle("active");
});

// TYPING EFFECT
const text = "Frontend Developer | Aspiring Software Engineer";
let i = 0;

function type(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type, 70);
}
}

type();

// PARTICLES
const container = document.getElementById("particles");

for(let i=0;i<40;i++){
let dot = document.createElement("div");

dot.style.position="absolute";
dot.style.width="4px";
dot.style.height="4px";
dot.style.background="#38bdf8";
dot.style.borderRadius="50%";
dot.style.opacity=Math.random();

dot.style.left=Math.random()*100+"vw";
dot.style.top=Math.random()*100+"vh";

dot.style.animation="float "+(3+Math.random()*5)+"s infinite";

container.appendChild(dot);
}