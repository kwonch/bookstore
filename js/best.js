
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
            backgroundColor: "#5e6b9e",
            color: "#fff"
        });
    }).mouseleave(function () {
        $(".best_seller>.best_title>ul>li").css({
            backgroundColor: "rgba(255, 255, 255, 0)",
            color: "#000"
        });
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        });
    });
});