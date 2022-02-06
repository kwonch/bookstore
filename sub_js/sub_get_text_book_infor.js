
$(function(){
        $.get("../sub_text/sub_text_1.txt",function(data){
           $(".book_infor_3").html(data);
        })
        $.get("../sub_text/sub_text_2.txt",function(data){
            $(".book_infor_4").html(data);
         })
       
         $.get("../sub_text/sub_authors2.txt",function(data){
            $(".author_text_2").html(data);
         })
});

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "바보",
            size: 5
        },
        headers: {
            Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
        }
    })
    
    .done(function (msg){
        for(var i=0; i<5; i++){
            $(".best_in_this>div").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
            $(".best_in_this>div>span").eq(i).append("<h5>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h5>");
            $(".best_in_this>div>span").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            $(".best_in_this>div>span").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");
            
    
            
        }
    });
   
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: {
            query: "슈퍼",
            size: 5
        },
        headers: {
            Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
        }
    })
    
    .done(function (msg){
        for(var i=0; i<5; i++){
            $(".best_in_this2>div").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
            $(".best_in_this2>div>span").eq(i).append("<h5>"+'<a href="#">'+msg.documents[i].title+"</a>"+"</h5>");
            $(".best_in_this2>div>span").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            $(".best_in_this2>div>span").eq(i).append("<h5>"+msg.documents[i].price+"원</h5>");
            
    
            
        }
    });


