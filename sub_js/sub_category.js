
$(function(){
$(".category_title_1").mouseover(function () {
    $(".category_bottom_2").stop().show();
       }).mouseout(function () {
      $(" .category_bottom_2").stop().hide();
       });

$(".category_title_2").mouseover(function () {
    $(".category_bottom_1").stop().show();
       }).mouseout(function () {
      $(" .category_bottom_1").stop().hide();
       });


$(".category_title_3").mouseover(function () {
    $(".category_bottom_3").stop().show();
       }).mouseout(function () {
      $(" .category_bottom_3").stop().hide();
       });
    
$(".category_title_4").mouseover(function () {
    $(".category_bottom_4").stop().show();
       }).mouseout(function () {
      $(" .category_bottom_4").stop().hide();
       });       
});

$(function () {
    
    // (input 숫자 증가)
    $(".fa-plus-square").click(function () {
        var i = $(this).siblings("input").val();
        i++;
        $(this).siblings("input").val(i);
    });

    // (input 숫자 감소)
    $(".fa-minus-square").click(function () {
        var i = $(this).siblings("input").val();
        i--;
        if (i <= 0) {
            alert("최소 주문수량은 1개입니다.");
            i = 1;
        }
        $(this).siblings("input").val(i);
    });
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "불편한 편의점(15만부 기념 윈터 에디션)",
        size: 6
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<6; i++){
       
        $(".book_in_right_title_2 ").eq(i).append("<h2>"+msg.documents[i].title+"</h2>");
        $(".price_1").eq(i).append("<span>"+msg.documents[i].price+"원</span>");
        

        
    }
});