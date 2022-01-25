 $(function(){

    $(".new>.new_box>.new_title>ul>li").mouseenter(function () {
        $(".book_box_wrap").stop().hide();
        $(".book_box_wrap").eq($(this).index()).stop().show();

        $(".new>.new_box>.new_title>ul>li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
        }).mouseleave(function () {
        $(".new>.new_box>.new_title>ul>li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    })
 
 // .book_contents_left 이미지 hide/show
  var i = 0;
  $(".book_contents_box_left").click(function () {

      i--;

      if (i < $(this).parent().children(".book_contents_box:first").index()) {
          i = $(this).parent().children(".book_contents_box:last").index();
      };

      $(this).parent().children(".book_contents_box").stop().hide();
      $(this).parent().children(".book_contents_box").eq(i).stop().show();

  });

  // .book_contents_right 이미지 hide/show
  var i = 0;
  $(".book_contents_box_right").click(function () {

      i++;

      if (i > $(this).parent().children(".book_contents_box:last").index()) {
          i = 0;
      };

      $(this).parent().children(".book_contents_box").stop().hide();
      $(this).parent().children(".book_contents_box").eq(i).stop().show();

  });
});


//화제의 신간 국내도서 domestic_book
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "자연",
        size: 12
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<12; i++){
        $(".domestic_book>.book_contents").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".domestic_book>.book_contents").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".domestic_book>.book_contents").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        var str=msg.documents[i].contents;
        var str2=str.substring(0,30);

        $(".domestic_book >.book_contents").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>")
    }
});

//화제의 신간 외국도서 foreign_book
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "harry potter",
        size: 12
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<12; i++){
        $(".foreign_book>.book_contents").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".foreign_book>.book_contents").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".foreign_book>.book_contents").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        var str=msg.documents[i].contents;
        var str2=str.substring(0,30);

        $(".foreign_book >.book_contents").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>")
    }
});

//화제의 신간 ebook
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "주식",
        size: 12
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<12; i++){
        $(".ebook>.book_contents").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".ebook>.book_contents").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".ebook>.book_contents").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        var str=msg.documents[i].contents;
        var str2=str.substring(0,30);

        $(".ebook >.book_contents").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>")
    }
});

//화제의 신간 sam
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "운명",
        size: 12
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<12; i++){
        $(".sam>.book_contents").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".sam>.book_contents").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".sam>.book_contents").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        var str=msg.documents[i].contents;
        var str2=str.substring(0,30);

        $(".sam >.book_contents").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>")
    }
});

//화제의 신간 음반/기프트 record
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "음악",
        size: 12
    },
    headers: {
        Authorization: "KakaoAK 9c0fe9e4d691d7756ab6ad4fc9524dee"
    }
})

.done(function (msg){
    for(var i=0; i<12; i++){
        $(".record>.book_contents").eq(i).append('<a href="#">'+"<img src='"+msg.documents[i].thumbnail+"'/>"+"</a>");
        $(".record>.book_contents").eq(i).append("<h3>"+'<a href="sub2.html">'+msg.documents[i].title+"</a>"+"</h3>");
        $(".record>.book_contents").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");

        var str=msg.documents[i].contents;
        var str2=str.substring(0,30);

        $(".record >.book_contents").eq(i).append("<p>"+'<a href="sub2.html">'+str2+"</a>"+"</p>")
    }
});


