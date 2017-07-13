$(function(){
    $(".diqu").on("click","li",function(){
        var t=$(this).index();
        $(this).css({"background":"#e7ee22","color":"#000"});
        $(this).siblings().css({"background":"none","color":"#fff"});
        $(".jipiao").children("div").eq(t).siblings("div").css({"display":"none"});
        $(".jipiao").children("div").eq(t).css({"display":"block"});
    })
})

