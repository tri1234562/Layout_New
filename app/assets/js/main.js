$(document).ready(function(){
        $('section[data-type="background"]').each(function(){
            var $this=$(this);
            var $window=$(window);
            $window.on("scroll",function(){
                var y=-($window.scrollTop()/($this.data('speed')/2));
                var position="50% "+y+"px";
                $this.css({"backgroundPosition":position});
            });
        });
        $(".one").on("click",function(){
            $("#one").addClass('active').slideToggle();
            $("#two,#three").removeClass('active').slideUp();
        });
        $(".two").on("click",function(){
            $("#two").addClass('active').slideToggle();
            $("#one,#three").removeClass('active').slideUp();
        });
        $(".three").on("click",function(){
            $("#three").addClass('active').slideToggle();
            $("#two,#one").removeClass('active').slideUp();
        });
});

