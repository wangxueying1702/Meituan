$(function(){
    $(".Retop").click(function () {
        $('body,html').animate({scrollTop: 0}, 0);
        return false;
    });
    $(".Reservemain").children("ul").on("click","li",function(){
        var t=$(this).index();
        $(this).css({"background":"#27d0d5","color":"#fff"});
        $(this).siblings().css({"background":"#fff","color":"#2c2c2c"});
        $(".Reservemain").children("div").eq(t).siblings("div").css({"display":"none"});
        $(".Reservemain").children("div").eq(t).css({"display":"block"});
    })
})
