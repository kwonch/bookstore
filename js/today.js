$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "인생을 바꾼 식사의 기적",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".good_ratings_first").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".good_ratings_first").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".good_ratings_first").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        $(".good_ratings_first").eq(i).append('<a href="#">'+'<img class="ratings_img" src="main_img/ratings.png"/>'+"</a>");


        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "라이온의 간식",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".good_ratings_second_1").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".good_ratings_second_1").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".good_ratings_second_1").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        $(".good_ratings_second_1").eq(i).append('<a href="#">'+'<img class="ratings_img" src="main_img/ratings.png"/>'+"</a>");


        
    }


});
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "초등영어회화 일력 365(이은경쌤의)(스프링)",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".good_ratings_second_2").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".good_ratings_second_2").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".good_ratings_second_2").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        $(".good_ratings_second_2").eq(i).append('<a href="#">'+'<img class="ratings_img" src="main_img/ratings.png"/>'+"</a>");


        
    }


});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "나는 왜 생각이 많을까?",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }

})



.done(function (msg){
    for(var i=0; i<10; i++){
        $(".good_ratings_second_3").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".good_ratings_second_3").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".good_ratings_second_3").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        $(".good_ratings_second_3").eq(i).append('<a href="#">'+'<img class="ratings_img" src="main_img/ratings.png"/>'+"</a>");


        
    }
});
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "고립의 시대",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})



.done(function (msg){
    for(var i=0; i<10; i++){
        $(".good_ratings_second_4").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".good_ratings_second_4").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".good_ratings_second_4").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        $(".good_ratings_second_4").eq(i).append('<a href="#">'+'<img class="ratings_img" src="main_img/ratings.png"/>'+"</a>");


        
    }
});