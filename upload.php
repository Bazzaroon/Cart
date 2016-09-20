<?php

class Uploader{

   public function Upload($filePath, $dirPath){
        $ftp_dir = $dirPath;
        $ftp_directory = 'c:/xampp/htdocs/PdfFiles/Uploads/';
        $ftp_server = '192.168.0.3';
        $ftp_user_name = 'barrytait';
        $ftp_user_pass = 'repro20';
        $file = $dirPath . $filePath;
        $remote_file = $filePath;
        
        $existing = file_exists("c:/xampp/htdocs/PdfTest/PdfFiles/ThePeanut.pdf");
        
        $conn_id = ftp_connect($ftp_server);
        
        //ftp_pasv($conn_id, true);
        $login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
        $res = ftp_chdir($conn_id, "Uploads");
        
        if (ftp_put($conn_id, $remote_file, $file, FTP_ASCII)) { 
            echo "successfully uploaded $file\n"; 
            exit; 
        } else { 
            echo "There was a problem while uploading $file\n"; 
            exit; 
        } 
        ftp_close($conn_id); 
        
    }

    
}
