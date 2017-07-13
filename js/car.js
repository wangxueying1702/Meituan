/**
 * Created by Administrator on 2017/7/13.
 */
$(function(){
    $(".xunxiang").on("click","li",function(){
        var num=$(this).index();
        if(num==2){
            $(".dd").text("请选择出发地")
        }
        if(num==1){
            $(".dd").text("请选择目的地")
        }
        $(this).css({"border-bottom":" 0.05rem solid #0fa8ec","background": "#fff"})
        $(this).siblings().css({"border-bottom":"0","background": "#e8f5fd"})
        $(".xunxiang").siblings("div").eq(num).css({"display":"block"});
        $(".xunxiang").siblings("div").eq(num).siblings("div").css({"display":"none"})
    })
})