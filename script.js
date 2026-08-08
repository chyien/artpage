/* =========================================
   ART PORTFOLIO
   Interactive features
   ========================================= */


/* ---------- MOBILE NAVIGATION ---------- */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* ---------- ARTWORK LIGHTBOX ---------- */

const artCards = document.querySelectorAll(".art-card");

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxTitle = document.querySelector("#lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");


artCards.forEach(card => {

    card.addEventListener("click", () => {

        const image = card.dataset.image;
        const title = card.dataset.title;

        lightboxImage.src = image;
        lightboxImage.alt = title;
        lightboxTitle.textContent = title;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";
    });

});


/* Close lightbox */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    lightboxImage.src = "";
}


lightboxClose.addEventListener("click", closeLightbox);


/* Click outside artwork to close */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* Escape key closes artwork */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});


/* ---------- SIMPLE SCROLL EFFECT ---------- */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.1
    }
);


sections.forEach(section => {
    observer.observe(section);
});
