<?php

include_once('data.php');

class ca_user{

    function Login($creds){
        $sql = "select * from ca_users where EmailAddress = '{$creds['uname']}' and PwHash = '{$creds['pword']}'";
        $DC = new dataClass();
        
        
        $result = $DC->Query($sql);
        $rec = mysqli_fetch_array($result, MYSQLI_ASSOC);
        if(!$rec){
            return 0;
        }
        else
        {
            $guid = date(DATE_RSS);
            $b64enc = base64_encode($guid);
            
            $new_sql = "update ca_users set LastLoggedIn = '" . date('Y/m/d H:i:s') . "' , Token = '" . $b64enc . "' ";
            $new_sql .= " where EmailAddress = '{$creds['uname']}' and PwHash = '{$creds['pword']}'";
             $res = $DC->Query($new_sql);
            unset($rec['PwHash']);
            return $rec;
        }
        
    }
    function GetToken($emailaddress){
        $sql = "select Token from ca_users where ";
    }
}
