/**
 * Created by dmitry on 25.04.15.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: false,
        scrollOverflow: true,
        controlArrows: false,
        css3: true,
        scrollingSpeed: 700,
        easingcss3: 'ease-in-out',
        afterRender: function(){
            var titleHeight = $(".three-row-1").height();

            $(".three-one-content").css("width", $(window).width() - 150);
            $(".three-one-content").css("left", 75);
            $(".three-one-content").css("min-height", $(window).height() - 170);
            $(".three-one-content").css("top", 0);

            $(".three-two-content").css("width", $(window).width() - 150);
            $(".three-two-content").css("left", $(window).width() + 75);
            $(".three-two-content").css("min-height", $(window).height() - 170);
            $(".three-two-content").css("top", 0);

            $(".three-three-content").css("width", $(window).width() - 150);
            $(".three-three-content").css("left", 2 * $(window).width() + 75);
            $(".three-three-content").css("min-height", $(window).height() - 170);
            $(".three-three-content").css("top", 0);

            /*setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 4000);*/
        },
        afterLoad: function(anchorLink, index){
            if(index == 6){
                //alert("Section 6 ended loading");
                $(".six-container-title").addClass("position-fixed");
            }
        }
    });
});
