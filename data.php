 <?php
    
    class dataClass
    {
          
        private $dbuser = 'dbo636060245';
        private $dbpass = 'repro20';
        private $dbase = 'db636060245';

        private $conn;
        
        private function Connect()
        {

                $dbhost = $_SERVER['HTTP_HOST'];
            if(strpos($dbhost,'local') === FALSE )
            {
                $dbhost = 'db636060245.db.1and1.com';
            } else {
                $dbhost = '127.0.0.1';
            }
            
            $mysqli = new mysqli($dbhost, $this->dbuser, $this->dbpass, 'db636060245');
            
            return $mysqli;
        }
        
        public function Query($sql)
        {
            $ms = $this->Connect();

            $retval = $ms->query($sql);
            
            $ms->close();
            
            return $retval;
        }
        
        
        
    }


