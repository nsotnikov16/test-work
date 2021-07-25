<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
    
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('kulturamanicura@list.ru', 'Культура Маникюра');
$mail->addAddress('nsotnikov16@bk.ru');
$mail->Subject = 'Салам Алейкум!';

$body = '<h1> Тебе письмо!</h1>';

if(trim(!empty($_POST['email']))) {
    $body.='<p><strong>E-mail:</strong> ' .$_POST['email'].'</p>';
}

if(trim(!empty($_POST['tel']))) {
    $body.='<p><strong>Phone Number:</strong> ' .$_POST['tel'].'</p>';
}

if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);