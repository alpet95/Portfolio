$(document).ready(function() {
  $('#menuIcon').click(function() {
    $(this).toggleClass('fa-times');
    $('#profile').toggleClass('show-menu');
  });

  $(window).on('scroll load', function() {
    $('#menuIcon').removeClass('fa-times');
    $('#profile').removeClass('show-menu');
  });
});