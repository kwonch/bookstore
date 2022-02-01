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



$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "돈의 속성(150쇄 기념 에디션)",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".Recommendation_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".Recommendation_book").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".Recommendation_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
       


        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "백만 원으로 재벌 되기 십 년 사이",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".Recommendation_book_1").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".Recommendation_book_1").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".Recommendation_book_1").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
       


        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "주식투자 절대원칙",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".Recommendation_book_2").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".Recommendation_book_2").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".Recommendation_book_2").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
       


        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "비겁한 돈",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".Recommendation_book_3").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".Recommendation_book_3").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".Recommendation_book_3").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
       


        
    }
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "그냥 하지 말라",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".Recommendation_book_4").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".Recommendation_book_4").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".Recommendation_book_4").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
       


        
    }
});


