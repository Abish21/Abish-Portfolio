<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'abishecesis@gmail.com';
        $mail->Password = 'aqigslfcmxkwehcq';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom('abishecesis@gmail.com', 'Your Name');
        $mail->addAddress($email);
        $mail->addCC('abishecesis@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'Welcome!';
        $mail->Body = "Hello <b>$name</b>,<br><br>Thank you for registering.";

        $mail->send();
        echo "Welcome email sent!";
    } catch (Exception $e) {
        echo "Email failed to send. Error: {$mail->ErrorInfo}";
    }
}
?>
