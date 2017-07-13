/**
 * Created by Administrator on 2017/7/4.
 */
var mySwiper = new Swiper('.swiper-container',{
    loop:true,
    pagination: '.swiper-pagination',
    autoplay:2000
})
$(function(){
    $(".fu").click(function(){
        $("#chu").css({"opacity":1});
        $(".fu").css({"background":"#fff","color":"#0083cd"});
        $(".dan").css({"background":"#d2e1e6","color":"#002358"})
    })
    $(".dan").click(function(){
        $("#chu").css({"opacity":0});
        $(".fu").css({"background":"#d2e1e6","color":"#002358"});
        $(".dan").css({"background":"#fff","color":"#0083cd"})
    })
})