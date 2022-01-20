$(function(){
      // header_banner 삭제
      $(".top_remove_banner").click(function () {
        $(".topbanner").stop().slideUp();
    });

     // header sotre 토글
    $(".store ul>li:first").mouseover(function () {
          $(".area").show();
             }).mouseout(function () {
            $(" .area").hide();
             });


             $(".a").mouseover(function () {
              $(".member").stop().fadeIn("fast");
                 }).mouseout(function () {
                $(" .member").stop().fadeOut("fast");
                 });

    // header_search_btn 왼쪽으로 이동
    var i = 0;

    function header_btn_left() {

        i--;

        if (i < 0) {
            i = 3
        };
        $(".search_ad > img").stop().hide();
        $(".search_ad> img").eq(i).stop().show();
        $(".search_ad > span").text((i + 1) + "/4")

    };
    $(".search_ad i:last").click(function () {
        header_btn_left();
    });


    // header_search_btn 오른쪽으로 이동
    var i = 0;

    function header_btn_right() {

        i++;

        if (i > 3) {
            i = 0
        };
        $(".search_ad > img").stop().hide();
        $(".search_ad > img").eq(i).stop().show();
        $(".search_ad > span").text((i + 1) + "/4")

    };
    $(".search_ad > i:first").click(function () {
        header_btn_right();
    });

    //main_sub_menu toggle
    $(".eb").mouseover(function(){
          $(this).children(".main_sub_menu").stop().fadeIn("fast");
    }).mouseout(function(){
          $(".main_sub_menu").stop().fadeOut("fast");
    });

});

