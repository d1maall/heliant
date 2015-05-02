/**
 * Created by dmitry on 25.04.15.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: false,
        scrollOverflow: true,
        afterRender: function(){
            var titleHeight = $(".three-title").height();

            $(".three-one-content").css("width", $(window).width() - 150);
            $(".three-one-content").css("left", 75);
            $(".three-one-content").css("min-height", $(window).height() - 170);
            $(".three-one-content").css("top", titleHeight);

            $(".three-two-content").css("width", $(window).width() - 150);
            $(".three-two-content").css("left", $(window).width() + 75);
            $(".three-two-content").css("min-height", $(window).height() - 170);
            $(".three-two-content").css("top", titleHeight);

            $(".three-three-content").css("width", $(window).width() - 150);
            $(".three-three-content").css("left", 2 * $(window).width() + 75);
            $(".three-three-content").css("min-height", $(window).height() - 170);
            $(".three-three-content").css("top", titleHeight);

            setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 4000);
        }
    });
});
