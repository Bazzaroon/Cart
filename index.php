<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Clever Art</title>

<style type="text/css">
    .banner{
	background-image:url('ArtImages/Banner.png');
	width:271px;
	height:69px;
	position:absolute;
	left:20px;
	top:10px;
        cursor:pointer;
}
</style>
    <link href="css/cleverart.css" rel="stylesheet" type="text/css"/>
    <link href="css/jquery-ui.css" rel="stylesheet" type="text/css"/>
    
    <script src="js/jquery-1.8.0.js" type="text/javascript"></script>
    <script src="js/jquery.cookie.js" type="text/javascript"></script>
    <script src="js/sha1.js" type="text/javascript"></script>
    <script src="js/jquery-ui.js" type="text/javascript"></script>
    
    <script src="js/cleverart.js" type="text/javascript"></script>
</head>

<body style="margin:0;background-image:url('ArtImages/homepageart.jpg')">
    <div class='banner'></div>
    <div class='login'>
    	<a href='javascript:Login()'>Login</a>
    </div>
    <div id='logindlg'></div>
	
    <?php
    ?>
</body>
</html>

<script>
	
        $(document).ready(function(){
            GetToken();
        });
        function Login(){
            $('#logindlg').login({width:500, height: 290});
            $('.login a').hide();
        }
        $('.banner').bind('click', function(){
            location.href = location.href;
        })
</script>