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
            var mkUp = "<div class='dlgheading'>Login</div>";
            mkUp += "<div style='margin:20px auto;width:80%'><input type='text' class='username' /></div>";
            $(self.element).append(mkUp);
            
            $('.username').bind('click', function(){
                if($(this).val().length == 0){
                    $(this).css({'background-image' : 'none'});
                }
            })
            
            mkUp = "<form action='cleverarthome.php'><div style='margin:20px auto;width:80%'><input type='password' class='pwhash' /></div>";
            mkUp += "<div style='margin:20px auto;width:80%'><a href='#' class='forgottenpassword'>Forgotten Password</a></div>";
            mkUp += "<div style='margin:0 auto;width:100px'><button type='submit' class='loginbtn'>Submit</button></div></form>"
            
            $(self.element).append(mkUp);
            $('.pwhash').bind('click', function(){
                if($(this).val().length == 0){
                    $(this).css({'background-image' : 'none'});
                }
            })
            


        },
        DoLogin:function(){
            self._markUp();
        }
        
});