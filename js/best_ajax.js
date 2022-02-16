$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "철학",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".total>.best_seller_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".total>.best_seller_book").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".total>.best_seller_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "그 해 우리는",
        size: 3
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<3; i++){
        $(".daily>.best_seller_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".daily>.best_seller_book").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".daily>.best_seller_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "불편한 편의점",
        size: 1
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<1; i++){
        $(".daily>.daily_other").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".daily>.daily_other").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".daily>.daily_other").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "지금 만나러",
        size: 2
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<2; i++){
        $(".daily>.daily_other2").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".daily>.daily_other2").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".daily>.daily_other2").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "달러구트",
        size: 3
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<3; i++){
        $(".daily>.daily_other3").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".daily>.daily_other3").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".daily>.daily_other3").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "밝은 밤",
        size: 1
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<1; i++){
        $(".daily>.daily_other4").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".daily>.daily_other4").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".daily>.daily_other4").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "dog",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".best_foreign_books>.best_seller_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".best_foreign_books>.best_seller_book").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".best_foreign_books>.best_seller_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "부자",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".best_ebook>.best_seller_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".best_ebook>.best_seller_book").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".best_ebook>.best_seller_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "사랑",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".best_audio>.best_seller_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".best_audio>.best_seller_book").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".best_audio>.best_seller_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "우리",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".beat_sam>.best_seller_book").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".beat_sam>.best_seller_book").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".beat_sam>.best_seller_book").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});

//best side ajax


$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "북튜버",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".side_wrap>.side_top_1").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".side_wrap>.side_top_1").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".side_wrap>.side_top_1").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "눈의 여왕(양장본 HardCover)",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    
        $(".side_wrap>.side_bottom_2").append('<a href="#">'+"<img src='"+msg.documents[2].thumbnail+"'/>"+"</a>");
        $(".side_wrap>.side_bottom_2").append("<h3>"+'<a href="#">'+msg.documents[2].title+"</a>"+"</h3>");
        $(".side_wrap>.side_bottom_2").append("<h6>"+msg.documents[2].authors+"</h6>");

        
    
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "센 강의 이름 모를 여인",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<10; i++){
        $(".side_wrap>.side_top_3").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".side_wrap>.side_top_3").eq(i).append("<h3>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".side_wrap>.side_top_3").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        
    }
});

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "사이키 쿠스오의 재난.",
        size: 10
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    
        $(".side_wrap>.side_bottom_4").append('<a href="#">'+"<img src='"+msg.documents[1].thumbnail+"'/>"+"</a>");
        $(".side_wrap>.side_bottom_4").append("<h3>"+'<a href="#">'+msg.documents[1].title+"</a>"+"</h3>");
        $(".side_wrap>.side_bottom_4").append("<h6>"+msg.documents[1].authors+"</h6>");

        
    
});

