/**
 * Created by dmitry on 25.04.15.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: false,
        scrollOverflow: true,
        afterRender: function(){
            $(".three-one-content").css("width", $(window).width() - 50);
            $(".three-one-content").css("left", 25);
            $(".three-one-content").css("height", $(window).height() - 150);
            $(".three-one-content").css("top", 125);

            $(".three-two-content").css("width", $(window).width() - 50);
            $(".three-two-content").css("left", $(window).width() + 25);
            $(".three-two-content").css("height", $(window).height() - 150);
            $(".three-two-content").css("top", 125);

            $(".three-three-content").css("width", $(window).width() - 50);
            $(".three-three-content").css("left", 2 * $(window).width() + 25);
            $(".three-three-content").css("height", $(window).height() - 150);
            $(".three-three-content").css("top", 125);
        }
    });
});
