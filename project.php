<?php

$req = $_GET['cmd'];

switch($req){
    case 'get':
        Get($_POST['adata']);
        break;
}


function Get($sql){
 include_once 'data.php';
   $DC = new dataClass();
    $Result = $DC->Query($sql);
    $returnData = array();
    while ($row = mysqli_fetch_array($Result, MYSQLI_ASSOC)) {
        array_push($returnData, $row);
    }
    //$rec = mysqli_fetch_array($Result, MYSQLI_ASSOC);
    
    echo json_encode($returnData);
}