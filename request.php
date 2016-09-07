<?php

echo 'Processing';

include_once 'user.php';

$cmd = $_GET['cmd'];

switch ($cmd){
    case 'login':
        DoLogin();
        break;
}

function DoLogin(){
    $usr = new ca_user();
    
}