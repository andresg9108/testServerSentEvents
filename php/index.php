<?php

header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');

$sToken = !empty($_GET['token']) ? $_GET['token'] : '';
$oResponse = (object)[
    "status" => 0,
    "message" => ''
];

if($sToken === 'asftuK'){
    $oResponse->status = 1;
    $oResponse->message = md5((string)rand(0, 10000000));
}

echo "data: " . json_encode($oResponse) . "\n\n";










/*
while (true) {
    echo "data: Hola\n\n";
    
    flush(); // Vaciar el buffer de salida para enviar los datos inmediatamente
    ob_flush(); // Flushear también el búfer de salida de PHP

    sleep(5);
}
*/