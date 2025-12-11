/* ----------------------------------------
   Smooth Scroll for Navbar Links
---------------------------------------- */
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});


/* ----------------------------------------
   Scroll Reveal Animations (Fade-In)
---------------------------------------- */
const revealElements = document.querySelectorAll(".service-item, .about-content, .section-title, .contact-info-item, .skillbar-container");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ----------------------------------------
   Add Reveal CSS Class
---------------------------------------- */
const style = document.createElement("style");
style.textContent = `
.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
}
.service-item, .about-content, .section-title, .contact-info-item, .skillbar-container {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.7s ease-out;
}
`;
document.head.appendChild(style);


/* ----------------------------------------
   Neon Cursor Glow Trail
---------------------------------------- */
const cursor = document.createElement("div");
cursor.style.position = "fixed";
cursor.style.width = "18px";
cursor.style.height = "18px";
cursor.style.borderRadius = "50%";
cursor.style.background = "var(--neon-primary)";
cursor.style.pointerEvents = "none";
cursor.style.boxShadow = "0 0 12px var(--neon-primary)";
cursor.style.zIndex = "9999";
cursor.style.mixBlendMode = "screen";
cursor.style.transition = "transform 0.08s linear";
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
    cursor.style.transform = `translate(${e.clientX - 7}px, ${e.clientY - 7}px)`;
});


/* ----------------------------------------
   Animated Skill Bars (When Visible)
---------------------------------------- */
const skillBars = document.querySelectorAll(".skillbar-container");

const animateSkills = () => {
    skillBars.forEach(bar => {
        const percent = bar.getAttribute("data-percent");
        const skillFill = bar.querySelector(".skills");

        if (bar.classList.contains("visible")) {
            skillFill.style.width = percent;
        }
    });
};

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);


/* ----------------------------------------
   Parallax Effect Enhancement
---------------------------------------- */
const parallaxItems = document.querySelectorAll("[data-depth]");

document.addEventListener("mousemove", e => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    parallaxItems.forEach(item => {
        const depth = item.getAttribute("data-depth");
        item.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
});


/* ----------------------------------------
   Owl Carousel for Testimonials (If Enabled)
---------------------------------------- */
$(document).ready(function(){
    $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3500,
        smartSpeed: 800,
        dots: true,
        responsive:{
            0:{ items:1 },
            768:{ items:2 },
            1024:{ items:3 }
        }
    });
});
