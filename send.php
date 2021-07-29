<?php

$email = $_POST['email'];
$tel = $_POST['tel'];

$to = "nsotnikov16@bk.ru";

$subject = "Заявка с сайта";

$message = "Письмо отправлено из моей формы <br />
Почта пользователя: ". htmlspecialchars($email)."<br />
Телефон: ".htmlspecialchars($tel);

$headers = "From: kulturamanicura@list.ru <no-reply@mysite.ru>\r\nContent-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);

$response = ['message' => 'Данные отправлены'];

header('Content-type: application/json');
echo json_encode($response);
exit;
?>