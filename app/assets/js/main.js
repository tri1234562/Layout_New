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


         /*===========clicked fun=================*/
        $(".test a").on("click",function(e){
            var $target=$(this).data('target');
            $('.test p').not($target).slideUp();
            $($target).slideToggle();
            e.preventDefault();
        });
        

        /*===========Animate menu=================*/
        $("a.home").on('click',function(){
            $('html,body').animate({
                scrollTop:0},1000
            )
        });

        $('a.feature').on("click",function(a){
            $('html,body').animate({scrollTop:$('#features').offset().top},1000);
            a.preventDefault();
        });

        $('a.service').on("click",function(a){
            $('html,body').animate({scrollTop:$('#service').offset().top},1000)
            a.preventDefault();
        });

        $('a.portfolio').on("click",function(a){
            $('html,body').animate({scrollTop:$('#portfolio').offset().top},1000);
            a.preventDefault();
        });

        $('a.about').on("click",function(a){
            $('html,body').animate({scrollTop:$('#about').offset().top},1000);
            a.preventDefault();
        });

        $('a.team').on("click",function(a){
            $('html,body').animate({scrollTop:$('#team').offset().top},1000);
            a.preventDefault();
        });

        $('a.plan').on("click",function(a){
            $('html,body').animate({scrollTop:$('#plan').offset().top},1000);
            a.preventDefault();
        });

        $('a.contact').on("click",function(a){
            $('html,body').animate({scrollTop:$('#contact').offset().top},1000);
            a.preventDefault();
        });
        /*===========border-top Menu=================*/
        $('.navbar-nav a').on("click",function(){
            $('.navbar-nav a').removeClass('active-menu');
            $(this).addClass('active-menu');
        })

        /*===========MODAL=================*/
        $('.modal-fun a').on("click",function(e){
            var $target = $(this).data('target');
            $($target).animate({opacity:1,top:70},500).attr({height:'100%'}).addClass('active-modal');
            e.preventDefault();
        })
        $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $(targeted_popup_class).animate({opacity:0,top:0},500).removeClass('active-modal');
        e.preventDefault();       
    });
});

