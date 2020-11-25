<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php
$result = mail("zayavki@cfk-finans.com", "Заявка с cfk-finans.com", "Данные клиента: \nКлиент: $_POST[T1] \nКонтактный телефон: $_POST[T2] \nЖелаемаемая сумма кредита: $_POST[T3] \nВаше место работы: $_POST[T4] \nВаш доход: $_POST[T5] \nEmail: $_POST[T6] \nВаша кредитная история: $_POST[D1] \nФактическое место проживания: $_POST[D2] \nСообщение: $_POST[S1]");
require_once('send_request_to_crm.php');
send_request_to_crm($client_name=$_POST['T1'], $credit=$_POST['T3'], $phone=$_POST['T2'], $company=$_POST['T4'], $profit=$_POST['T5'], $email=$_POST['T6'], $credit_history=$_POST['D1'], $address_state=$_POST['D2'], $message=$_POST['S1']);


?>
<?php
if ($result) {
echo"<div class='alert-final'>
	<div class='title'>Спасибо, анкета отправлена успешно!</div>
	<div class='hint'><a href='index.html'>На главную</a></div>
</div>";
} else {
echo "<div class='alert-final'>
	<div class='title'>Временные неполадки в сети</div>
</div>";
}
?>
</body>
</html
