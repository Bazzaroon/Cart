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
            
            mkUp = "<div style='margin:20px auto;width:80%'><input type='password' autocomplete='false' class='pwhash' /></div>";
            mkUp += "<div style='margin:20px auto;width:80%'><a href='#' class='forgottenpassword'>Forgotten Password</a></div>";
            mkUp += "<div style='margin:0 auto;width:100px'><button type='button' onclick='self.DoLogin()' class='loginbtn'>Submit</button></div>";
            mkUp += "<div class='loginerror'></div>";
            
            $(self.element).append(mkUp);
            
            $('.pwhash').bind('keydown', function(){
                if($(this).val().length == 0){
                    $(this).css({'background-image' : 'none'});
                    
                }
            })
            
            var x = event;
            $('.username').keydown(function(event){
                if(event.keyCode === 13){
                    self.DoLogin();
                }
            }).focus();


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
                      $.cookie('userdata', cookiedata, {expires: 1, path: '/'});
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
    var cookieData = $.cookie('userdata');
    if(cookieData != undefined){ 
        location.href = '/Cart/cleverarthome.php';
    }
}

var dash = function(width,height,top,left,title,id,menuitems){
    this.Width = width;
    this.Height = height;
    this.Top = top;
    this.Left = left;
    this.Title = title;
    this.Data = null;
    this.contextMenu = null;
    this.Id = id;
    this.MenuItems = menuitems;
    
    this.Display = function(){
        var mkUp = "<div class='dash-container'><div class='dash-title' title='Click for options'></div><div class='dash-scroller'><div class='dash-list'></div></div></div>";
        $('body').append(mkUp);
        $('.dash-container').css({width:this.Width+'px',height:this.Height+'px',left:this.Left+'px', top:this.Top+'px'});
        $('.dash-title').text(this.Title);
        $('.dash-title').append("<div class='dash-gear'></div>");
        
        var tData = {Id:this.Id,Items:this.MenuItems};
        $('.dash-gear').mouseenter(tData, function(e){
            if($('#'+e.data['Id']).length == 0){
                this.contextMenu = new caContextMenu($('.dash-gear'),e.data['Items'],e.data['Id']);
                this.contextMenu.Draw();
            }
        });
        $('#' + this.Id).click(function(e){
           $(this).remove(); 
        });
    }
    this.GetData = function(cmd, sql){
        this.Data = caData.GetData(cmd,sql);
    }
    
        this.DisplayList = function(){
        for(var x=0;x<this.Data.length;x++){
            var mkUp = "<div class='dash-list-item'><div></div>"+this.Data[x]['ProjectName']+"</div>";
            $('.dash-scroller').append(mkUp);
        }
        $('.dash-scroller').css({height:(this.Height - 40) + 'px'});
        
    }
 }

var caData = {
    GetData: function(aUrl, aSql){
        var retVal = null;
        $.ajax({
            url:aUrl,
            async:false,
            type:'POST',
            data:{adata: aSql},
            success: function(data){
                retVal = JSON.parse(data);
            },
            error: function(){
                alert('Unable to fetch data.')
            }
        });
        return retVal;
    }
}


var caContextMenu = function(element, options, id){
    this.Element = element;
    this.Options = options;
    this.Id = id;
    
        this.Draw = function(){
            var mkUp = "<div id='" + this.Id + "' class='context-container'></div>";
            $('body').append(mkUp);
            var eTop = parseInt($(this.Element).css('top')) + $(this.Element).parent().parent().position().top;
            var eLeft = parseInt($(this.Element).css('left')) + $(this.Element).parent().parent().position().left;
            $('#'+this.Id).css({top:eTop+'px',left:eLeft+'px'});
            
            for(var x=0;x<this.Options.length;x++){
                mkUp = "<div class='contextmenuoption'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+this.Options[x]+"</div>";
                $('#' + this.Id).append(mkUp);
            }
        $('#' + this.Id).mouseleave(function(){
           $(this).remove(); 
        });
        }
    }

$.widget('cleverart.dlist',{
    self:null,
    options:{
        url:null,
        sql:null,
        dbData:null,
        listitemwidth:35
    },
    _create: function(){
        self = this;
        if(self.options.url != null && self.options.sql != null){
            self._loadData();
            self._showData();
        }
    },
    _loadData: function(){
        $.ajax({
            url:self.options.url,
            async:false,
            type:'POST',
            data:{postdata: self.options.sql},
            success: function(data){
                self.options.dbData = JSON.parse(data);
            },
            error: function(){
                alert('Unable to fetch data.')
            }
        });
    },
    _showData: function(){
        var mkUp = '';
        for(var x=0;x<self.options.dbData.length;x++){
            var dta = self.options.dbData[x]['ProjectName'].substring(0,self.options.listitemwidth);
            var projname = dta.length >= self.options.listitemwidth ? dta + ' ...' : dta;
            mkUp += "<div title='" + self.options.dbData[x]['ProjectName'] + "' class='dash-list-item'>" + projname + "</div>";
        }
        $(self.element).html(mkUp);
    }
    
});
var project = {
  Load:function(aUrl, aSql){
        var retVal = null;
        $.ajax({
            url:aUrl,
            async:false,
            type:'POST',
            data:{adata: aSql},
            success: function(data){
                retVal = JSON.parse(data);
            },
            error: function(){
                alert('Unable to fetch data.')
            }
        });
        return retVal;
    },
    PHPLoad:function(){
    }
    
};