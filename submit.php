<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Ambil data dari form
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Validasi email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Email tujuan
    $to = "ertansyahrizal@gmail.com";  // Ganti dengan alamat email Anda
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $fullMessage = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    // Kirim email
    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Error: " . error_get_last()['message'];
    }
}
?>
