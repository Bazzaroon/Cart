// Cleverart Javascript

$.widget('colorart.login', {
	self:null,
	options:{
		width:300,
		height:600
	},
	_create: function(){
		self = this;
                self._markUp();
	},
        _markUp:function(){
            $(self.element).css({width:self.options.width + 'px'});
            $(self.element).css({height:self.options.height + 'px'});
            $(self.element).css({'background-color' :'White',  margin: '80px auto', border:'2px solid #4b4e50'});
            var mkUp = "<div class='dlgheading'>CleverArt Login</div>";
            mkUp += "<div style='margin:20px auto;width:80%'><input type='text' class='username' /></div>";
            $(self.element).append(mkUp);
            
            $('.username').bind('keydown', function(){
                if($(this).val().length == 0){
                    $(this).css({'background-image' : 'none'});
                    $('.loginerror').text('');
                }
            })
            
            mkUp = "<div style='margin:20px auto;width:80%'><input type='password' class='pwhash' /></div>";
            mkUp += "<div style='margin:20px auto;width:80%'><a href='#' class='forgottenpassword'>Forgotten Password</a></div>";
            mkUp += "<div style='margin:0 auto;width:100px'><button type='button' onclick='self.DoLogin()' class='loginbtn'>Submit</button></div>";
            mkUp += "<div class='loginerror'></div>";
            
            $(self.element).append(mkUp);
            $('.pwhash').bind('click', function(){
                if($(this).val().length == 0){
                    $(this).css({'background-image' : 'none'});
                    
                }
            })
            


        },
        DoLogin:function(){
            $.cookie('location', location.host, { expires: 1});
            var creds = {uname:$('.username').val(), pword: Sha1.hash($('.pwhash').val())};
            $.ajax({
                url:'/Cart/caphp.php?cmd=login',
                async:false,
                type:'post',
                data:creds,
                success: function(data){
                  if(data != 'login 0'){
                      var cookiedata = data.replace('login ','');
                      $.cookie('userdata', cookiedata, {expires: 1});
                      location.href = '/Cart/cleverarthome.php';
                  } else {
                      $('.loginerror').text('Unable to log in. Unrecognised Emailaddress or Password');
                  }  
                },
                error: function(a,b,c){
                    $('.loginerror').text('Unable to log in. Sorry');
                }
            });
        }
        
});

function GetToken(){
    alert($cookie('userdata'));
    //var cookieData = JSON.parse($.cookie('userdata'));
    //if(cookieData === undefined) alert('No Cookie');
    //var a = 13;
}