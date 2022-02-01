$(function () {

    // maker_slide 점 슬라이드
    $(".maker_wrap>.maker_title > ul > li").mouseenter(function () {
        $(".maker_contents_box").stop().hide();
        $(".maker_contents_box").eq($(this).index()).stop().show();

        $(".maker_title > ul > li").removeClass();
        $(this).addClass("maker_slide");
    }).mouseleave(function () {
        $(".maker_title > ul > li").removeClass();
        $(this).addClass("maker_slide");
    });
});