$(document).ready(function() {

  $("#formOne").submit(function(event) {
    var fullname = $("input#textToShout").val().toUpperCase();

    $(".textToShout").text(fullname);

    $("#letter").show();

    event.preventDefault();
  });


});
