/* =========================
   TYPING EFFECT
========================= */

const typingText = document.getElementById("typingText");

const texts = [
    "Developer",
    "Gamer",
    "Creator",
    "Web Designer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    const speed = deleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();



/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});


/* Close menu after click */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});



/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(".section");

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(section => {

    observer.observe(section);

});



/* =========================
   MOUSE GLOW
========================= */

document.addEventListener("mousemove", e => {

    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}px`
    );

});
/* =========================
   BACKGROUND MUSIC
========================= */

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = true;

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        bgMusic.pause();

        musicBtn.textContent = "🔇";

        musicPlaying = false;

    } else {

        bgMusic.play();

        musicBtn.textContent = "🔊";

        musicPlaying = true;

    }

});
window.addEventListener("load", () => {
    bgMusic.volume = 0.5;

    bgMusic.play().catch(() => {
        console.log("Trình duyệt đã chặn autoplay.");
    });
});