<html>
    <head>
        <title>Clever Art</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="css/cleverart.css" rel="stylesheet" type="text/css"/>
    <link href="css/jquery-ui.css" rel="stylesheet" type="text/css"/>
    
    <script src="js/jquery-1.8.0.js" type="text/javascript"></script>
    <script src="js/jquery.cookie.js" type="text/javascript"></script>
    <script src="js/sha1.js" type="text/javascript"></script>
    <script src="js/jquery-ui.js" type="text/javascript"></script>
    
    <script src="js/cleverart.js" type="text/javascript"></script>
    
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

    </head>
    <body>
        <div class="banner" style="background-image:url('ArtImages/BannerHome.png')"></div>
        <div class='loggedin'></div>
    </body>
</html>

<script>
    $(document).ready(function(){
        var cookieData = JSON.parse($.cookie('userdata'));
        $('.loggedin').html("<a style='text-decoration:none' href='javascript:LogOut()'>Log Out&nbsp;</a>Logged In:" + cookieData['UserName']);
    });
    
    function LogOut(){
        if(confirm('Are you sure?')){
            $.removeCookie('userdata', { path: '/'});
            location.href = '/Cart';
        }
    }
</script>
