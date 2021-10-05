$(function () {
  $('.btn-allnews')
    .click(function (event) {
      event.preventDefault();
    })
    .click(function () {
      var header = $('.column-left h2');
      if (header.is(':visible')) {
        header.hide();
      } else {
        header.show();
      }
    });
});