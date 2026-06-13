document.addEventListener("DOMContentLoaded", () => {
    
    // 1. HAMBURGER MENU INTERACTION
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        // Close mobile navigation menu automatically when clicking a menu link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
            });
        });
    }


    // 2. TYPING EFFECT
    const text = "Frontend Developer | Aspiring Software Engineer";
    const typingContainer = document.getElementById("typing");
    let i = 0;

    function type() {
        if (typingContainer && i < text.length) {
            typingContainer.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }
    
    // Initialize typing loop
    type();


    // 3. GENERATE FLOATING DYNAMIC PARTICLES
    const container = document.getElementById("particles");

    if (container) {
        for (let i = 0; i < 40; i++) {
            let dot = document.createElement("div");

            dot.style.position = "absolute";
            dot.style.width = "4px";
            dot.style.height = "4px";
            dot.style.background = "#38bdf8";
            dot.style.borderRadius = "50%";
            dot.style.opacity = Math.random();

            // Distribute particles completely across the viewport coordinate plane
            dot.style.left = Math.random() * 100 + "vw";
            dot.style.top = Math.random() * 100 + "vh";

            // Map custom durations to trigger the CSS float transition natively
            dot.style.animation = "float " + (4 + Math.random() * 6) + "s infinite ease-in-out";

            container.appendChild(dot);
        }
    }
});