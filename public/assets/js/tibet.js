  $(function() {
    var yuks = $(window).height();
    var en = $(window).width();
    $(".puan").css({ position: "absolute", left: "240px", top: "20px"});
    
    //if width is smaller then height, care width
    if(en/yuks < 525/641){
      $("#resim").width(en);
      $(".puan").height(45/525*en);
    }else{
      $("#resim").height(yuks);
      $(".puan").height(45/641*yuks);
    };
    
    var step = 1;
    var left1 = parseInt($("#resim").width()/2 - $(".puan").width()/2 + 5);
    var top1 = parseInt($("#resim").height()/30 + 5);
    var left2 = parseInt($("#resim").width()*55/60 - $(".puan").width()/2);
    var top2 = parseInt($("#resim").height()*10/30 + 5);
    var left3 = parseInt($("#resim").width()*55/60 - $(".puan").width()/2);
    var top3 = parseInt($("#resim").height()*21/30 + 5);
    var left4 = parseInt($("#resim").width()/2 - $(".puan").width()/2 + 5);
    var top4 = parseInt($("#resim").height()*89/100 + 5);
    var left5 = parseInt($("#resim").width()*7/60 - $(".puan").width()/2);
    var top5 = parseInt($("#resim").height()*21/30 + 5);
    var left6 = parseInt($("#resim").width()*7/60 - $(".puan").width()/2);
    var top6 = parseInt($("#resim").height()*10/30 + 5);
    $(".puan").css("left",$("#resim").width()/2 - $(".puan").width()/2);
    $(".puan").css("top",$("#resim").height()/30 + 5);
    
    $(".puan").at_intervals(function(){
      //console.log(left1,$(".puan").css("left"),top1,$(".puan").css("top"));
      step += 1;
      switch(step)
      {
      case 1:
        goto_(left1,top1);
        break;
      case 2:
        goto_(left2,top2);
        break;
      case 3:
        goto_(left3,top3);
        break;
      case 4:
        goto_(left4,top4);
        break;
      case 5:
        goto_(left5,top5);
        break;
      case 6:
        goto_(left6,top6);
        break;
      default:
        step = 1
        goto_(left1,top1);
      }
       /* if(($(".puan").css("left") == left1+"px") & 
                ($(".puan").css("top") == top1+"px")) {
          goto_(left2,top2);
        }else{
          goto_(left1,top1);
        }*/
      }
      , { delay: 500, name: "periyot" });
      
    //$('.puan').delay(5000).removeClass("puan").addClass("puan2");

  });

  function goto_(l,t) {
    $(".puan").css("left",l);
    $(".puan").css("top",t);
  }
  
  