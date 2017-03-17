$(document).ready(
  function(){

    //hover on expertise-item in h3;
    if ('ontouchstart' in window) {
      $('#item1').hover(
        function() {
            $('#detail2').css('opacity','0.3');
            $('#detail3').css('opacity','0.3');
        }
      );
      $('#item1').mouseleave(
        function() {
          $('#detail2').css('opacity','1');
          $('#detail3').css('opacity','1');
        }
      );

      $('#item2').hover(
        function() {
            $('#detail1').css('opacity','0.3');
            $('#detail3').css('opacity','0.3');
        }
      );
      $('#item2').mouseleave(
        function() {
          $('#detail1').css('opacity','1');
          $('#detail3').css('opacity','1');
        }
      );

      $('#item3').hover(
        function() {
            $('#detail1').css('opacity','0.3');
            $('#detail2').css('opacity','0.3');
        }
      );
      $('#item3').mouseleave(
        function() {
          $('#detail1').css('opacity','1');
          $('#detail2').css('opacity','1');
        }
      );

      //hover on expertise block itself;

      $('#detail1').hover(
        function() {
            $('#detail2').css('opacity','0.3');
            $('#detail3').css('opacity','0.3');
        }
      );
      $('#detail1').mouseleave(
        function() {
          $('#detail2').css('opacity','1');
          $('#detail3').css('opacity','1');
        }
      );

      $('#detail2').hover(
        function() {
            $('#detail1').css('opacity','0.3');
            $('#detail3').css('opacity','0.3');
        }
      );
      $('#detail2').mouseleave(
        function() {
          $('#detail1').css('opacity','1');
          $('#detail3').css('opacity','1');
        }
      );

      $('#detail3').hover(
        function() {
            $('#detail1').css('opacity','0.3');
            $('#detail2').css('opacity','0.3');
        }
      );
      $('#detail3').mouseleave(
        function() {
          $('#detail1').css('opacity','1');
          $('#detail2').css('opacity','1');
        }
      );
    }







});
