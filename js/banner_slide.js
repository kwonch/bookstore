
//banner silde안에 책
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"아내의 시간" },
    headers:{Authorization:"KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"}
  })
    .done(function( msg ) {
      $(".book1").append("<img src='"+msg.documents[1].thumbnail+"'/>");
      $(".book1").append("<h6 class='banner_book'>"+msg.documents[1].title+"</h6>")
     
      var str=msg.documents[1].contents;
      var str2=str.substring(0,27);

      $(".book1").append("<p class='banner_book'>"+str2+"</p>");
    console.log(msg);
    });