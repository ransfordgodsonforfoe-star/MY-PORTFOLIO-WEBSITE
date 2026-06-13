// HAMBURGER MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
nav.classList.toggle("active");
});

// TYPING EFFECT
const text = "Frontend Developer | Aspiring Software Engineer";
let i = 0;

function type(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(type, 80);
}
}

type();