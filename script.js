// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


// Open / close mobile menu
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close mobile menu after clicking a link
navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ========================================
// ACTIVE NAVIGATION ON SCROLL
// ========================================

const sections = document.querySelectorAll("section");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 200 &&
            window.scrollY < sectionTop + sectionHeight - 200
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


// ========================================
// NAVBAR SHADOW ON SCROLL
// ========================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});