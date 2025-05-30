$(document).ready(function(){
    $(".b_chipoy").click(function(){
        var _this = $(this);
        var thisTop = parseInt(_this.css('top'));
        var thisLeft = parseInt(_this.css('left'));

        if(thisTop == 500){
            alert('there is a coin.. u cant go!');
        }
        else {
            _this.parent('.chessboard').append('<div class="hightlighter"></div');
 
            $('.hightlighter').css('top', thisTop + 100 + 'px');
            $('.hightlighter').css('left', thisLeft);
    
            $('.hightlighter').click(function(){
                    _this.css('top', thisTop + 100 + 'px');
                    $('.hightlighter').remove();        
            });
        }

        
    });


    $(".knight").click(function(){
        var one=$(this);
        var onetop = parseInt(one.css('top'));
        var oneleft = parseInt(one.css('left'));
        
        if(onetop == 400 || oneleft == 700){
            alert('there is a coin.. u cant go!');
        }
        else{
            one.parent('.chessboard').append('<div class="highlighter2"></div>');

            $('.highlighter2').css('top',onetop + 200 + 'px');
            $('.highlighter2').css('left',oneleft + 100 + 'px');
        
            $('.highlighter2').click(function(){
                one.css('top', onetop + 200 + 'px');
                one.css('left', oneleft + 100 + 'px');
                $('.highlighter2').remove();
            });
        }
    });

    $(".b_king").click(function(){
        var _this = $(this);
        
        var thisTop = parseInt(_this.css('top'));
        var thisLeft = parseInt(_this.css('left'));


        var possibleWays = [
            {
                wayTop: thisTop - 100 + 'px',
                wayLeft: thisLeft - 100 + 'px'
            },
            {
                wayTop: thisTop - 100 + 'px',
                wayLeft: thisLeft + 'px'
            },
            {
                wayTop: thisTop - 100 + 'px',
                wayLeft: thisLeft + 100 + 'px'
            },
            {
                wayTop: thisTop + 'px',
                wayLeft: thisLeft - 100 + 'px'
            },
            {
                wayTop: thisTop + 'px',
                wayLeft: thisLeft + 100 + 'px'
            },
            {
                wayTop: thisTop + 100 +  'px',
                wayLeft: thisLeft - 100 + 'px'
            },
            {
                wayTop: thisTop + 100 +  'px',
                wayLeft: thisLeft + 'px'
            },
            {
                wayTop: thisTop + 100 +  'px',
                wayLeft: thisLeft + 100 + 'px'
            },

        ];
        $('.highlighter2').remove(); 
        for(var i = 0; i < possibleWays.length; i++ ){

            var hightLighter = $('<div class="highlighter2"></div>');

            hightLighter.css('top', possibleWays[i].wayTop);
            hightLighter.css('left', possibleWays[i].wayLeft);

            _this.parent('.chessboard').append(hightLighter);

        } 
        for (var i = 0; i < possibleWays.length; i++) {

            var highlighter = $('<div class="highlighter2"></div>');
            highlighter.css({ top: possibleWays[i].wayTop + 'px', 
                left: possibleWays[i].wayLeft + 'px' });
                
            
           }
        
           $(".highlighter2").click(function () {
            var newTop = $(this).position().top;
            var newLeft = $(this).position().left;
    
            _this.css({ top: newTop + "px", left: newLeft + "px" });
    
            $(".highlighter2").remove(); 
        });
    
}
);
});      




