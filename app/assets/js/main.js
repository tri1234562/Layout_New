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
        $(".test a").on("click",function(a){
            var $this=$(this);
            $(".test p").not($this.next('p')).slideUp();
            $this.next('p').slideToggle();
            a.preventDefault();
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
});

