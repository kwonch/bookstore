
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

