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
        easingcss3: 'ease',
        afterRender: function(){

            var w = $(".calc-block").width();

            $('.slider1').jRange({
                from: 15000,
                to: 250000,
                step: 5000,
                scale: ["15000 р.","250000 р."],
                format: "%s рублей",
                width: w-100,
                showLabels: true,
                theme: "theme-blue",
                onstatechange: function(){
                    $(".res").html($(".slider1").val());
                    //($(".slider1").val());
                }
            });
            $('.slider2').jRange({
                from: 0,
                to: 100,
                step: 1,
                scale: [0,25,50,75,100],
                format: '%s',
                width: w-100,
                showLabels: true,
                theme: "theme-blue"
            });
            $('.slider3').jRange({
                from: 0,
                to: 100,
                step: 1,
                scale: [0,25,50,75,100],
                format: '%s',
                width: w-100,
                showLabels: true,
                theme: "theme-blue"
            });



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

            $(".left-arrow").click(function(){
                $.fn.fullpage.moveSlideLeft();
            });

            $(".right-arrow").click(function(){
                $.fn.fullpage.moveSlideRight();
            });

            /*setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 4000);*/
        },
        afterLoad: function(anchorLink, index){
            if (index == 2) {

            }

            if(index == 5){
                $(".six-container-title").removeClass("six-container-title-up");
            }
        },
        onLeave: function(index, nextIndex, direction){
            if (index == 5 && direction == "down"){
                $(".six-container-title").addClass("position-fixed");
            }

            if (index == 8 && direction == "down"){
                $(".six-container-title").removeClass("position-fixed");
                $(".six-container-title").addClass("six-container-title-up");
            }

            if (index == 9 && direction == "up"){
                $(".six-container-title").addClass("position-fixed");
                $(".six-container-title").removeClass("six-container-title-up");
            }

            if(index == 6 && direction =='up'){
                $(".six-container-title").removeClass("position-fixed");
                //$(".six-container-title").removeClass("six-container-title-up")
            }
            /*if(index == 8 && direction =='down'){
                $(".six-container-title").removeClass("position-fixed");
            }*/
        }
    });
});
