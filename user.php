<?php

include_once('data.php');

class ca_user{

    function Login($creds){
        $sql = "select * from ca_users where UserName = '{$creds['uname']}' and PwHash = '{$creds['pword']}'";
        $DC = new dataClass();
        
        
        $result = $DC->Query($sql);
        $rec = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if(!$rec){
            echo 0;
        }
        else
        {
            $new_sql = "update ca_users set LastLoggedIn = '" . date('Y/m/d H:i:s') . "' where UserName = '{$creds['uname']}' and PwHash = '{$creds['pword']}'";
            $res = $DC->Query($new_sql);
            unset($rec['PwHash']);
            echo json_encode ($rec);
        }
        
    }
}
