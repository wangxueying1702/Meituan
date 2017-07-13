/**
 * Created by Administrator on 2017/7/13.
 */
var mySwiper = new Swiper('.swiper-container',{
    loop:true,
    pagination: '.swiper-pagination',
    autoplay:2000
})
$(".top").click(function () {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
});
$(document).on('scroll',function(){
    if($(document).scrollTop()>50){
        $(".top").css({"display":"block"});
    }else{
        $(".top").css({"display":"none"});
    }
});