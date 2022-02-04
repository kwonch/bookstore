$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "서로",
        size: 6
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<6; i++){
        $(".slide_contents_1>div").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".slide_contents_1>div").eq(i).append("<h5>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h5>");
        $(".slide_contents_1>div").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");
        

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "서점",
        size: 6
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<6; i++){
        $(".slide_contents_2>div").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".slide_contents_2>div").eq(i).append("<h5>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h5>");
        $(".slide_contents_2>div").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");
        

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "너의",
        size: 6
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<6; i++){
        $(".slide_contents_3>div").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".slide_contents_3>div").eq(i).append("<h5>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h5>");
        $(".slide_contents_3>div").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");
        

        
    }
});



$(function(){
//  left(prev) show hide
    var i = 0
$(".book_in_bottom_slide>.fa-chevron-left").click(function () {

    i--;

    if (i < 0) {
        i = 2
    }

    $(".book_in_slide_wrap").stop().hide();
    $(".book_in_slide_wrap").eq(i).stop().show();

});

    // right(next) show hiede
var i = 0
$(".book_in_bottom_slide>.fa-chevron-right").click(function () {

    i++;

    if (i > 2) {
        i = 0
    }

    $(".book_in_slide_wrap").stop().hide();
    $(".book_in_slide_wrap").eq(i).stop().show();
});

});
