<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Dapatkan ID ikon berdasarkan halaman saat ini
        const currentPage = window.location.pathname;

        // Menambahkan kelas 'active' pada ikon yang sesuai berdasarkan halaman saat ini
        if (currentPage === "/about.html") {
            document.getElementById("about-icon").classList.add("active");
        } else if (currentPage === "/index.html") {
            document.getElementById("home-icon").classList.add("active");
        } else if (currentPage === "/portfolio.html") {
            document.getElementById("portfolio-icon").classList.add("active");
        } else if (currentPage === "/contact.html") {
            document.getElementById("contact-icon").classList.add("active");
        }

        // Menangani pengiriman form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Mencegah form langsung disubmit

                var form = this;
                var formData = new FormData(form);

                fetch(form.action, {
                    method: form.method,
                    body: formData
                })
                .then(response => {
                    if (response.ok) {
                        // Jika pengiriman berhasil, alihkan ke halaman sukses
                        window.location.href = 'success.html';
                    } else {
                        // Jika pengiriman gagal, alihkan ke halaman gagal
                        window.location.href = 'fail.html';
                    }
                })
                .catch(error => {
                    // Jika terjadi error pada pengiriman, alihkan ke halaman gagal
                    window.location.href = 'fail.html';
                });
            });
        }
    });
</script>
