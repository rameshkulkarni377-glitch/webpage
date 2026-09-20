/* =========================================
   NAVBAR
========================================= */

const navbar =
    document.querySelector(".main-navbar");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.querySelector(".nav-links");

const navItems =
    document.querySelectorAll(".nav-link");


/* =========================================
   SCROLL EFFECT
========================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================
   MOBILE MENU
========================================= */

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("open");
        navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            menuToggle.classList.contains("open") ? "true" : "false"
        );

    });

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.classList.remove("open");

    });

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });

    navItems.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
});

/* =========================================
   CLOSE MOBILE MENU AFTER NAV CLICK
========================================= */

navItems.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks) navLinks.classList.remove("open");

        if (menuToggle) {
            menuToggle.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});

/* ===============================
   REFERENCE LINK EFFECT
================================ */

document
    .querySelectorAll(".reference-list a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                link.style.opacity = "0.6";

                setTimeout(() => {

                    link.style.opacity = "";

                }, 250);

            }
        );

    });

    /* ===============================
   FLOATING BACK TO TOP
================================ */

const backToTop =
    document.getElementById("backToTop");


/* Show button after scrolling */

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


/* Scroll smoothly to top */

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* =========================================
   TECHNICAL APPROACH SEQUENTIAL ANIMATION
========================================= */

const technologySection =
    document.querySelector(".technology-section");


if (technologySection) {

    const technologyObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        technologySection
                            .classList.add("active");

                        observer.unobserve(
                            technologySection
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    technologyObserver.observe(
        technologySection
    );

}

/* =========================================
   KEY FEATURES AUTO SLIDER
========================================= */

const featureItems =
    document.querySelectorAll(".feature-item");

const featureContents =
    document.querySelectorAll(".feature-content");

let currentFeature = 0;


/* Change feature */

function showFeature(index) {

    featureItems.forEach(item => {

        item.classList.remove("active");

    });


    featureContents.forEach(content => {

        content.classList.remove("active");

    });


    if (featureItems[index]) {
        featureItems[index].classList.add("active");
    }

    if (featureContents[index]) {
        featureContents[index].classList.add("active");
    }

}


/* Automatic sequence */

setInterval(() => {

    currentFeature++;

    if (currentFeature >= featureItems.length) {

        currentFeature = 0;

    }

    showFeature(currentFeature);

}, 3000);


/* Allow user to click */

featureItems.forEach((item, index) => {

    item.addEventListener("click", () => {

        currentFeature = index;

        showFeature(index);

    });

});

/* =========================================
   SOUND ENERGY OVERVIEW SLIDER
========================================= */

const overviewItems =
    document.querySelectorAll(
        ".overview-item"
    );


const progressLines =
    document.querySelectorAll(
        ".progress-line"
    );


let currentOverview = 0;

let overviewTimer;


/* =========================================
   SHOW OVERVIEW
========================================= */

function showOverview(index) {

    overviewItems.forEach(item => {

        item.classList.remove("active");

    });


    progressLines.forEach(line => {

        line.classList.remove("active");

    });


    if (overviewItems[index]) {
        overviewItems[index].classList.add("active");
    }

    if (progressLines[index]) {
        progressLines[index].classList.add("active");
    }


    currentOverview = index;

}


/* =========================================
   AUTO CHANGE
========================================= */

function startOverviewSlider() {

    overviewTimer =
        setInterval(() => {

            currentOverview++;

            if (
                currentOverview >=
                overviewItems.length
            ) {

                currentOverview = 0;

            }


            showOverview(
                currentOverview
            );

        }, 4000);

}


startOverviewSlider();


/* =========================================
   CLICK FEATURE
========================================= */

overviewItems.forEach(
    (item, index) => {

        item.addEventListener(
            "click",
            () => {

                clearInterval(
                    overviewTimer
                );


                showOverview(index);


                startOverviewSlider();

            }
        );

    }
);

/* =========================================
   REFERENCES REVEAL ANIMATION
========================================= */

const referencesSection =
    document.querySelector(
        ".references"
    );


if (referencesSection) {

    const referencesObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        referencesSection
                            .classList.add("visible");

                        observer.unobserve(
                            referencesSection
                        );

                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    referencesObserver.observe(
        referencesSection
    );

}

/* =========================================
   HERO INTERACTION
========================================= */

const soundCard =
    document.querySelector(".sound-card");


if (soundCard) {

    soundCard.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                soundCard.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - .5) * 4;

            const rotateX =
                ((y / rect.height) - .5) * -4;

            soundCard.style.transform =
                `translateY(-5px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    soundCard.addEventListener(
        "mouseleave",
        () => {

            soundCard.style.transform =
                "";

        }
    );

}
