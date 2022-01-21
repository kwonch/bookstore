
//banner silde안에 책
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"실격당한 자들을 위한 변론" },
    headers:{Authorization:"KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"}
  })
    .done(function( msg ) {
      $(".book1").append("<img src='"+msg.documents[0].thumbnail+"'/>");
      $(".book1").append("<h6 class='banner_book'>"+msg.documents[0].title+"</h6>")
     
      var str=msg.documents[0].contents;
      var str2=str.substring(0,65);

      $(".book1").append("<p class='banner_book'>"+str2+"</p>");
    
    });

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"마음의 주인" },
        headers:{Authorization:"KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"}
      })
        .done(function( msg ) {
          $(".book2").append("<img src='"+msg.documents[0].thumbnail+"'/>");
          $(".book2").append("<h6 class='banner_book'>"+msg.documents[0].title+"</h6>")
         
          var str=msg.documents[0].contents;
          var str2=str.substring(0,65);
    
          $(".book2").append("<p class='banner_book'>"+str2+"</p>");
        
        });

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"언어의 온도(170만부 기념 에디션)" },
            headers:{Authorization:"KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"}
          })
            .done(function( msg ) {
              $(".book3").append("<img src='"+msg.documents[0].thumbnail+"'/>");
              $(".book3").append("<h6 class='banner_book'>"+msg.documents[0].title+"</h6>")
             
              var str=msg.documents[0].contents;
              var str2=str.substring(0,65);
        
              $(".book3").append("<p class='banner_book'>"+str2+"</p>");
            
            });