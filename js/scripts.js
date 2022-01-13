$(document).ready(function() {
  $("#age-form").submit(function(event) {
    event.preventDefault();
    $("#age-success").hide();
    $("#age-fail").hide();
    const userAge = $("input#age").val();
    $(".form-group").hide();
    $("button#submit-button").hide();
    $("button#retry-button").show();
    if (userAge >= 18) {
      $("#age-success").show();
    } else {
      $("#age-fail").show();
    }
  });
  $("#retry-button").click(function() {
    location.reload(true);
  });
});