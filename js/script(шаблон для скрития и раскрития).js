$(function() {
  $(".btn-allnews").on("click", function(event) {
    event.preventDefault();
  });
  $(".btn-allnews").on("click", function() {
    $(".category").slideToggle();
  });
});
