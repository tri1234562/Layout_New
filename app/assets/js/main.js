$(document).ready(function(){
        $('section[data-type="background"]').each(function(){
            var $this=$(this);
            var $window=$(window);
            $window.on("scroll",function(){
                var y=-($window.scrollTop()/($this.data('speed')/2));
                var position="50% "+y+"px";
                $this.css({backgroundPosition:position});
            });
        });
});

