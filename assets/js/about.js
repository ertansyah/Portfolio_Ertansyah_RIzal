document.addEventListener("DOMContentLoaded", function() {
    // Dapatkan ID ikon berdasarkan halaman saat ini
    const currentPage = window.location.pathname;

    if (currentPage === "/about.html") {
        // Tambahkan kelas 'active' pada ikon yang sesuai (About)
        document.getElementById("about-icon").classList.add("active");
    } else if (currentPage === "/index.html") {
        // Tambahkan kelas 'active' pada ikon yang sesuai (Home)
        document.getElementById("home-icon").classList.add("active");
    } else if (currentPage === "/portfolio.html") {
        // Tambahkan kelas 'active' pada ikon yang sesuai (Portfolio)
        document.getElementById("portfolio-icon").classList.add("active");
    } else if (currentPage === "/contact.html") {
        // Tambahkan kelas 'active' pada ikon yang sesuai (Contact)
        document.getElementById("contact-icon").classList.add("active");
    }
});
