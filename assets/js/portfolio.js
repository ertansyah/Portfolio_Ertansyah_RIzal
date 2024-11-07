// Fungsi untuk membuka modal ketika ikon mata diklik
document.querySelectorAll('.eye-icon').forEach((eyeButton, index) => {
    eyeButton.addEventListener('click', function () {
        // Ambil elemen proyek yang terkait
        const project = eyeButton.closest('.project');
        
        // Ambil informasi tentang proyek (nama, teknologi, deskripsi)
        const projectName = project.querySelector('img').alt;
        const techUsed = project.querySelector('img').dataset.tech;
        const projectDescription = project.querySelector('img').dataset.description;

        // Masukkan data ke dalam modal
        document.getElementById('projectName').textContent = projectName;
        document.getElementById('techUsed').textContent = techUsed;
        document.getElementById('projectDescription').textContent = projectDescription;

        // Tampilkan modal
        document.getElementById('projectModal').style.display = 'flex';
    });
});

// Fungsi untuk menutup modal ketika tombol close diklik
document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('projectModal').style.display = 'none';
});

// Fungsi untuk menutup modal jika pengguna mengklik area luar modal
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('projectModal')) {
        document.getElementById('projectModal').style.display = 'none';
    }
});

// Menambahkan/menyusun sidebar aktif berdasarkan halaman yang dibuka
document.addEventListener('DOMContentLoaded', function () {
    // Mendapatkan ID halaman yang sedang aktif
    const currentPage = window.location.pathname.split('/').pop();

    // Menambahkan kelas 'active' ke ikon sidebar yang sesuai
    const sidebarIcons = document.querySelectorAll('.sidebar .icon');
    sidebarIcons.forEach(icon => {
        if (icon.getAttribute('href').includes(currentPage)) {
            icon.classList.add('active');
        }
    });
});
