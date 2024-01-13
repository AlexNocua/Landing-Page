<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];

    $header = 'From: ' . $email . "\r\n";
    $header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $header .= "Mime-Version: 1.0 \r\n";
    $header .= "Content-Type: text/plain";

    $message = "Este mensaje fue enviado por: " . $name . "\r\n";
    $message .= "Su e-mail es: " . $email . "\r\n";
    $message .= "Su comentario fue: " . $comments . "\r\n";
    $message .= "Mensaje enviado el: " . date('d,m,Y', time());

    $para = 'tudirecciondecorreo@example.com';
    $asunto = 'Comentarios de Landing Page';

    if (mail($para, $asunto, $message, $header)) {
        echo "Correo enviado exitosamente.";
    } else {
        echo "Error al enviar el correo. Por favor, intenta de nuevo más tarde.";
    }
} else {
    echo "Acceso no permitido.";
}
?>