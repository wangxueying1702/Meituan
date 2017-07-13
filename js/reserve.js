$(function(){
    $(".fanfu").click(function(){
        $(".fanfu").css({"background": "#0fa8eb","color": "#fff"})
        $(".dancheng").css({"background": "none","color": "#0fa8eb"})
        $(".fan").css({"display":"block"})
    })
    $(".dancheng").click(function(){
        $(".fanfu").css({"background": "none","color": "#0fa8eb"})
        $(".dancheng").css({"background": "#0fa8eb","color": "#fff"})
        $(".fan").css({"display":"none"})
    })
    $("#zhuanhuan").click(function(){
        $(".chu").animate({
            left:"1.3rem"
        }, 500);
        $(".dao").animate({
            left:"-1.3rem"
        }, 500 );
        setTimeout(function(){
            var t=$(".chu").text();
            $(".chu").text($(".dao").text());
            $(".dao").text(t);
            $(".chu").css({"left":0});
            $(".dao").css({"left":0});
        },600)

    })
})
