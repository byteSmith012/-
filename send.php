<?php

$token = "токен бота";
$chat_id = "чат айді";

$name = trim($_POST['name']);
$phone = trim($_POST['telephone']);

if (!$name || !$phone) {
    die("Error: missing fields");
}

$message = "
📝 Новий запит з сайту:
👤 Ім'я: $name
📞 Телефон: $phone
";

$url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&text=" . urlencode($message);

$send = file_get_contents($url);

if ($send) {
    echo "OK";
} else {
    echo "Error";
}

?>
