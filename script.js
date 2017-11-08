$(document).ready(function() {

  var ogText;

  $(".table").on("mouseenter", function(event) {
    if($(this).hasClass("taken")){
      name = $(this).attr("name");
      guestNumber = $(this).attr("partynum");
      ogText = $(this).text();

      $(this).text("");
      $(this).append("<div class ='hoverBox'>" + "Name: " + name + "Party size: " + guestNumber + "</div>");
      // $(this).text.append("<div>" + name + userGuestNum "</div>")
    }

  }).on("mouseleave", function(event) {
    if($(this).hasClass("taken")){
      $(this).text(ogText);
    }

  });

  $(".taken").on("mouseenter", function(event){

  })

    $(".table").on("click", function(event) {
      if(!$(this).hasClass("taken")){
        table = $(this);
        $("form").slideDown(2000);
        $("form input").val("");
      }
    });

  $(".submit-button").on("click", function() {
    var userName = $("#nameId").val();
    var userNum = $("#phoneId").val();
    var userGuestNum = $("#guestNumber").val();
    console.log(userName, userNum, userGuestNum);
    table.attr("name", userName).attr("partynum", userGuestNum);
    table.addClass("taken");
    $("form").hide();

  });

  $(".material-icons").on("click", function(){
    $("form").hide();
  });
// will be needed to get the cute little box to pop up on mouseover

});

//need a way to exit the form--close button
//need to get the box to pop up on mouseover reserved table
