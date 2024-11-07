
    document.addEventListener("DOMContentLoaded", function() {
        // Dapatkan ID ikon berdasarkan halaman saat ini
        const currentPage = window.location.pathname;

        if (currentPage === "/contact.html") {
            document.getElementById("contact-icon").classList.add("active");
        } else if (currentPage === "/index.html") {
            document.getElementById("home-icon").classList.add("active");
        } else if (currentPage === "/portfolio.html") {
            document.getElementById("portfolio-icon").classList.add("active");
        } else if (currentPage === "/about.html") {
            document.getElementById("about-icon").classList.add("active");
        }

       
    });

    function showLoading() {
        // Disable form and show loading spinner
        document.getElementById('contactForm').classList.add('form-submitting');
        document.getElementById('loadingSpinner').style.display = 'inline-block';
        
        // Clear the form after submission
        setTimeout(() => {
            document.getElementById('contactForm').reset();  // Reset the form
        }, 1000);  // Delay to show the spinner before resetting the form
    }

