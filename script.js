/* =========================================================
   ART PORTFOLIO
   Main JavaScript
   ========================================================= */


/* =========================
   MOBILE NAVIGATION
   ========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close menu after selecting a page */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================
   ARTWORK LIGHTBOX
   ========================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxTitle =
    document.getElementById("lightbox-title");

const lightboxClose =
    document.querySelector(".lightbox-close");


/* Open artwork */

document.querySelectorAll(".art-card").forEach(card => {

    card.addEventListener("click", () => {

        const image =
            card.getAttribute("data-image");

        const title =
            card.getAttribute("data-title");


        /* If the artwork has an image */

        if (image && image.trim() !== "") {

            if (lightboxImage) {

                lightboxImage.src = image;

                lightboxImage.alt =
                    title || "Artwork";

            }

        }


        /* Set title */

        if (lightboxTitle) {

            lightboxTitle.textContent =
                title || "";

        }


        /* Show lightbox */

        if (lightbox) {

            lightbox.classList.add("active");

            document.body.style.overflow =
                "hidden";

        }

    });

});


/* Close button */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


/* Click outside artwork */

if (lightbox) {

    lightbox.addEventListener("click", event => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


/* Escape key */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        lightbox &&
        lightbox.classList.contains("active")
    ) {

        closeLightbox();

    }

});


/* Close lightbox function */

function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================
   IMAGE LOADING
   ========================= */

/*
   Once real artwork images are added,
   this makes sure broken image files
   don't leave ugly empty image boxes.
*/

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.style.display = "none";

    });

});


/* =========================
   CURRENT PAGE
   ========================= */

/*
   Automatically highlights the
   current page in the navigation.
*/

const currentPage =
    window.location.pathname
        .split("/")
        .pop() || "index.html";


document.querySelectorAll(".nav-links a").forEach(link => {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    }

});
