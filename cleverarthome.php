<html>
    <head>
        <title>Clever Art</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href="css/cleverart.css" rel="stylesheet" type="text/css"/>
    <link href="css/jquery-ui.css" rel="stylesheet" type="text/css"/>
    
    <script src="js/jquery.js" type="text/javascript"></script>
    <script src="js/jquery.cookie.js" type="text/javascript"></script>
    <script src="js/sha1.js" type="text/javascript"></script>
    <script src="js/jquery-ui.js" type="text/javascript"></script>
    
    <script src="js/cleverart.js" type="text/javascript"></script>
    
    <style type="text/css">
    .banner{
	background-image:url('ArtImages/Banner.png');
	width:271px;
	height:69px;
        cursor:pointer;
        margin:0 0 0 10px;
}
</style>

    </head>
    <body>
        
        <div class='loggedin'></div>
        <table border='1' class='home-table' cellspacing='0'>
            <tr style='height:69px'><td colspan='2'><div class="banner" style="background-image:url('ArtImages/BannerHome.png')"></div></td></tr>
            <tr><td style='width:22%'><div class='dash-container'><div>Projects</div></div></td><td>
                    <div id="dpanel" class="dash-panel">
                        <ul>
                        </ul>
                   </div>
                
                </td></tr>
            <tr style='height:35px'><td colspan='2' style='background-color:#6b6d6d'></td></tr>
        </table>
    </body>
</html>

<script>
    $(document).ready(function(){
        var cookieData = JSON.parse($.cookie('userdata'));
        $('.loggedin').html("<a style='text-decoration:none' href='javascript:LogOut()'>Log Out&nbsp;</a>Logged In:" + cookieData['UserName']);
        $('#dpanel').tabs({
            classes: {'ui-tabs': 'highlight'},
            heightStyle:'fill',
        });
        project('/Cart/project.php?cmd=get', 'select * from ca_projects where ')
    });
    
    
    
    function GetUserOptions(){
        
    }
    
    function LogOut(){
        if(confirm('Are you sure?')){
            $.removeCookie('userdata', { path: '/'});
            location.href = '/Cart';
        }
    }
    
    function AddTab(title, tabName){
        mkUp = "<li><a href='#dtab'>My Tab</a></li>";
        $('#dpanel ul').append(mkUp);
        $('#dpanel').tabs('refresh');
    }
</script>
