
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