document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form default

            var form = this;
            var formData = new FormData(form);

            // Kirimkan data ke Formspree dengan 'no-cors'
            fetch(form.action, {
                method: form.method,
                body: formData,
                mode: 'no-cors'  // Menambahkan opsi 'no-cors'
            })
            .then(response => {
                // Reset form setelah pengiriman berhasil
                form.reset(); // Kosongkan form

                // Redirect ke halaman sukses
                window.location.href = 'success.html'; // Redirect ke halaman sukses
            })
            .catch(error => {
                // Jika terjadi error, redirect ke halaman gagal
                window.location.href = 'fail.html';
            });
        });
    }
});
