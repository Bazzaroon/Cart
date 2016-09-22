<?php

$req = $_GET['cmd'];

switch($req){
    case 'get':
        GetData($_POST['postdata']);
        break;
}

function GetData($sql){
   include_once 'data.php';
   $DC = new dataClass();
   try
   {
    $Result = $DC->Query($sql);
   }
   catch(Exception $e)
   {
       echo 'no data';
   }
   
   $returnData = array();
    while ($row = mysqli_fetch_array($Result, MYSQLI_ASSOC)) {
        array_push($returnData, $row);
    }
    $rData = json_encode($returnData);
    
    echo $rData;
}
