/**
 * Created by Administrator on 2017/7/6.
 */
$(function(){

    var img1=["t44.png","t11.png","t12.png","t10.png","t13.png","t45.png","t46.png","t47.png"];
    var span1=["机票预定","酒店","接送/自驾","旅游度假","额外行李购买","机上上网","景点门票","签证"];
    for(var i=0;i<img1.length;i++){
        var li=document.createElement("li");
        var img=document.createElement("img");
        img.id=i;
        img.src="images/"+img1[i];
        li.appendChild(img);
        var span=document.createElement("span");
        span.innerHTML=span1[i];
        li.appendChild(span);
        $(".re").append(li);
    }
    setTimeout(function(){
        for(var i=0;i<img1.length;i++){
            var w=$("#"+i).width()/100;
            var h=$("#"+i).height()/100;
            $("#"+i).css({"width":+w+"rem"},{"height":+h+"rem"})
        }
    },10)

    var img2=["t6.png","t7.png","t48.png","t49.png","t50.png","t51.png","t52.png","t53.png","t8.png","t54.png","t55.png","t56.png"];
    var span2=["选座&登机牌","该退/升舱","航班延误/取消","航班动态","餐饮预定","特殊服务","中转住宿","价格申诉","航延证明","客票验证","报销凭证","意见反馈"];
    for(var i=0;i<img2.length;i++){
        var li3=document.createElement("li");
        var img3=document.createElement("img");
        img3.id=i+"mg";
        img3.src="images/"+img2[i];
        li3.appendChild(img3);
        var span3=document.createElement("span");
        span3.innerHTML=span2[i];
        li3.appendChild(span3);
        $(".mg").append(li3);
    }
  setTimeout(function(){
      for(var i=0;i<img2.length;i++){
          //debugger;
          //var w1=parseInt($("#"+i+"mg").css("width"))/100;
          var w1=$("#"+i+"mg").width()/100;
          var h1=$("#"+i+"mg").height()/100;
          //alert(w1);
          //console.log(w1);
          $("#"+i+"mg").css({"width":+w1+"rem","height":+h1+"rem"})
      }
  },10)


})