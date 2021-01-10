<?php

/* https://api.telegram.org/bot1505047484:AAHUFSNiHQmoyBfaje8aI199_sqAUMXRzXE/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$price = $_POST['price'];
$token = "1505047484:AAHUFSNiHQmoyBfaje8aI199_sqAUMXRzXE";
$chat_id = "-446697459";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Продают:' => $price
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}

?>