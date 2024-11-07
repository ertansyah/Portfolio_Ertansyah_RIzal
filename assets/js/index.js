document.addEventListener("DOMContentLoaded", function () {
    // 1. Efek Mengetik
    const typingText = document.querySelector(".typing-text");
    const phrases = ["Quality Assurance", "Web Developer", "UI/UX Designer"];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenPhrases = 1500;

    function type() {
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, letterIndex);
            letterIndex--;
            if (letterIndex < 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, delayBetweenPhrases);
            } else {
                setTimeout(type, deletingSpeed);
            }
        } else {
            currentPhrase = phrases[phraseIndex];
            typingText.textContent = currentPhrase.substring(0, letterIndex + 1);
            letterIndex++;
            if (letterIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(type, delayBetweenPhrases);
            } else {
                setTimeout(type, typingSpeed);
            }
        }
    }
    type();

    // 2. Animasi Tombol Resume
    const resumeButton = document.getElementById("resume-btn");
    resumeButton.addEventListener("click", function (e) {
        e.preventDefault();
        resumeButton.classList.add("clicked");

        setTimeout(function () {
            resumeButton.classList.remove("clicked");
            window.location.href = resumeButton.href;
        }, 400);
    });

    // 3. Menandai Halaman Aktif di Sidebar
    const currentPath = window.location.pathname.split('/').pop();
    const icons = {
        "index.html": "home-icon",
        "about.html": "about-icon",
        "portfolio.html": "portfolio-icon",
        "contact.html": "contact-icon"
    };

    // Set icon aktif, default ke home-icon jika halaman kosong
    const activeIcon = icons[currentPath] || "home-icon";
    document.getElementById(activeIcon).classList.add("active");
});
