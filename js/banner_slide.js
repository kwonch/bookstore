
//banner silde안에 책
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "실격당한 자들을 위한 변론" },
    headers: { Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee" }
})
    .done(function (msg) {
        $(".book1").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".book1").append("<h6 class='banner_book'>" + msg.documents[0].title + "</h6>")

        var str = msg.documents[0].contents;
        var str2 = str.substring(0, 34);

        $(".book1").append("<p class='banner_book'>" + str2 + "</p>");

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "마음의 주인" },
    headers: { Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee" }
})
    .done(function (msg) {
        $(".book2").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".book2").append("<h6 class='banner_book'>" + msg.documents[0].title + "</h6>")

        var str = msg.documents[0].contents;
        var str2 = str.substring(0, 34);

        $(".book2").append("<p class='banner_book'>" + str2 + "</p>");

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "언어의 온도(170만부 기념 에디션)" },
    headers: { Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee" }
})
    .done(function (msg) {
        $(".book3").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $(".book3").append("<h6 class='banner_book'>" + msg.documents[0].title + "</h6>")

        var str = msg.documents[0].contents;
        var str2 = str.substring(0, 32);

        $(".book3").append("<p class='banner_book'>" + str2 + "</p>");

    });


$(function () {

    // slider 배경색 및 이미지 변경
    var slider_bgc = ["#e7e9f6", "#c3c5f8", "#e4f1d3", "#f8f4d7", "#fbeaf0", "#daecf0"]
    var slider_main_box = $(".banner > div");

    $(".banner_button > ul > li").mouseover(function () {
        $(".slide").css("background-color", slider_bgc[$(this).index()]);
        slider_main_box.stop().hide();
        slider_main_box.eq($(this).index()).stop().show();

        $(".banner_button > ul > li").removeClass("slide_btn_hover");
        $(this).addClass("slide_btn_hover");
    }).mouseleave(function () {
        $(".banner_button > ul > li").removeClass("slide_btn_hover");
        $(this).addClass("slide_btn_hover");
    });



    // slider 루프
    var i = 0

    function slider_loop() {
        i++;

        if (i > $(".banner > div:last").index()) {
            i = 0;
        };

        $(".slide").css("background-color", slider_bgc[i]);
        slider_main_box.stop().hide();
        slider_main_box.eq(i).stop().show();
        $(".banner_button > ul > li").removeClass("slide_btn_hover");
        $(".banner_button > ul > li").eq(i).addClass("slide_btn_hover");
    }

    setInterval(slider_loop, 3000)
});
