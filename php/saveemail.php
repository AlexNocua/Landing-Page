<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);
$name = $POST['name'];
$email = $POST['email'];
$coments = $POST["coments"];

$header = 'From: ' . $email . "\r\n"; // Agregué dos puntos después de 'From'
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . "\r\n";
$message .= "Su e-mail es: " . $email . "\r\n"; // Concatené las líneas usando '.='
$message .= "Su comentario fue: " . $POST['coments'] . "\r\n";
$message .= "Mensaje enviado el: " . date('d,m,Y', time());

$para = 'alex.nocua@alunos.ifsuldeminas.edu.br';
$asunto = 'Comentarios de Landing Page';

mail($para, $asunto, utf8_decode($message), $header);

header("Location: index.html");
?>