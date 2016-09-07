<?php

echo $_GET['cmd'];

include_once 'user.php';

$cmd = $_GET['cmd'];
$DT = $_POST;

switch ($cmd){
    case 'login':
        DoLogin();
        break;
}

function DoLogin(){
    $arr = $_POST;
    $usr = new ca_user();
    $moon = $usr->Login($arr);
    $json = json_encode($moon);
    echo $json;
}