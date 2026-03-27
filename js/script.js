/* ===================== MENU TOGGLE ===================== */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

/* ===================== MOBILE DROPDOWN FIX ===================== */
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (window.innerWidth < 768) {
            e.preventDefault();

            const menu = this.nextElementSibling;

            // close other dropdowns
            document.querySelectorAll(".dropdown-menu").forEach(d => {
                if (d !== menu) d.classList.remove("show");
            });

            menu.classList.toggle("show");
        }
    });
});

/* ===================== CLOSE MENU ON CLICK OUTSIDE ===================== */
document.addEventListener("click", function(e) {
    const nav = document.querySelector(".navbar");

    if (!nav.contains(e.target)) {
        document.querySelector(".nav-links").classList.remove("show");
        document.querySelectorAll(".dropdown-menu").forEach(d => d.classList.remove("show"));
    }
});

/* ===================== SCROLL ANIMATION ===================== */
const faders = document.querySelectorAll('.fade');

function handleScroll() {
    const trigger = window.innerHeight * 0.85;

    faders.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

/* ===================== ACTIVE NAV LINK ===================== */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

/* ===================== LANGUAGE TOGGLE ===================== */
function setLang(lang, el) {
    document.querySelectorAll('.flag').forEach(f => f.classList.remove('active'));
    el.classList.add('active');

    // Example translation system (extend later)
    const text = {
        en: {
            title: "JEDDAH FOUNDATION",
            tagline: "Grandmother of Humanity"
        },
        bn: {
            title: "জেদ্দাহ ফাউন্ডেশন",
            tagline: "মানবতার দাদী"
        }
    };

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (text[lang] && text[lang][key]) {
            el.textContent = text[lang][key];
        }
    });
}

/* ===================== SMOOTH SCROLL (OPTIONAL) ===================== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});