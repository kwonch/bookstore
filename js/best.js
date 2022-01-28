
$(function () {
    // #best_main > .contents_title > ul > li mouseenter
    $(".best_seller>.best_title>ul>li").mouseenter(function () {
        $(".best_seller_box").stop().hide();
        $(".best_seller_box").eq($(this).index()).stop().show();

        $(".best_seller>.best_title>ul>li").css({
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: "#000"
        });
        $(this).css({
            backgroundColor: "#5e6b9ea8",
            color: "#fff"
        });
    }).mouseleave(function () {
        $(".best_seller>.best_title>ul>li").css({
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: "#000"
        });
        $(this).css({
            backgroundColor: "#5e6b9ea8",
            color: "#fff"
        });
    });



    //.best_side 
    $(".side_title> ul > li").mouseenter(function () {
        $(".side_wrap").stop().hide();
        $(".side_wrap").eq($(this).index()).stop().show();

        $(".side_title > ul > li").removeClass();
        $(this).addClass("side_hover");
    }).mouseleave(function () {
        $(".side_title > ul > li").removeClass();
        $(this).addClass("side_hover");
    });
});