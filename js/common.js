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
});

