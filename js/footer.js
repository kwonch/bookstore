$(function(){
    //footer
    $(".footer_button").click(function(){
     $(".family_site_list").stop(). toggle();
  
    }) 
    $(".footer_button").click(function(){
        $(".footer_right>button> .fa-angle-down").toggle();
        $(".footer_right>button>.fa-angle-up").toggle();
    });
  
});
