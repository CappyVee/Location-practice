//business logic
function Vacation(name, location, when, travel, fun) {
  this.vacName = name;
  this.vacLocation = location;
  this.vacWhen = when;
  this.vacTravel = travel;
  this.vacFun = fun;
}//end vacation fxn

Vacation.prototype.vacItem = function() {
  return "<h1>" + this.vacName + "</h1>" + "<p><span>" + this.vacLocation + "</span></p>" + "<p class='remove'>Hey, I've never been here!</p>";
}


//user interface logic
$(document).ready(function(){
  $("form#vacayForm").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#vName").val();
    var inputtedLocation = $("input#vLocation").val();
    var inputtedWhen = $("input#vWhen").val();
    var inputtedTravel = $("input#vTravel").val();
    var inputtedFun = $("input#vFun").val();

    var newVacation = new Vacation(inputtedName, inputtedLocation, inputtedWhen, inputtedTravel, inputtedFun);

    $("ul#storeVacInfo").append("<li class='listInfo'>" + newVacation.vacItem() + "</li>");

    $(".listInfo").last().click(function(){
      $(".outputControl").show();
      $(".dispName").text(newVacation.vacName);
      $(".dispLocation").text(newVacation.vacLocation);
      $(".dispWhen").text(newVacation.vacWhen);
      $(".dispTravel").text(newVacation.vacTravel);
      $(".dispFun").text(newVacation.vacFun);
    });//end click fxn
    $(".remove").click(function(){
      $(this).closest("li").remove();
      $(".outputControl").hide();
    })//end remove fxn

  });//end submit fxn
});//end doc rdy fxn
