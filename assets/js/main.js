jQuery(document).ready(function($) {
  $(window).on('load', function() {
    $('.gallery-image > img').click(function() {
      $('#focussed-image').attr("src", this.src);
    });
  });
});