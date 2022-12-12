$(function(){
    let vw=$(window).width();
    let vh=$(window).height();
   
    $(window).scroll(function(){
        let y=$(this).scrollTop();

        $(".part").each(function(){
            containerTop=$(this).offset().top-110;
            if($(document).scrollTop()>containerTop){
               thisOff= $(this).attr("id");
               $(".part").removeClass("activew");
               ActiveID=$(this).addClass("activew").attr("id");
            }
        })
        $(".wrap-1 ul li ").each(function(){
             thisChildren=$(this).children("a");
             thisChildrenHref=$(this).children("a").attr("href");
             if(thisChildrenHref==="#"+ActiveID){
                $(".wrap-1 ul li a").removeClass("activea");
                $(thisChildren).addClass("activea");

             }
        })
        
          { if(y<=vh/2){
            $(".wrap-1 ul li a").removeClass("activea"); 
            $(".top").hide();
           }
           else{
            $(".top").show();
           }}
          
        })
    
    $(".top").click(function(){
       $("body,html").animate({
          scrollTop:0
       })
    })
    $(".mob").click(function(){
       $(".collapse").slideToggle();
    })

    $(".wrap-1 ul li a").click(function(e){
        e.preventDefault();
        let v=$(this).attr("href");
        let st=$(v).offset().top-100;
        $("body,html").animate({
            scrollTop:st
        })
        $(".activea").removeClass("activea");
        $(this).addClass("activea");
       
        if(vw<767){
            $(".collapse").slideUp();
        }
    })
        
        $("a").click(function(e){
            e.preventDefault()
        })
    })
