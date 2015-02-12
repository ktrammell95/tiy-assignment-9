var startNum = 0;
var one = "";
var two = "";
var operator = null;

//this says that if var two is null then the function is still open
var twoPending = function() {
  return operator !== null;
}
//this sets the output length to less than 15, 
//if try to go over it give error message
var output = function(num) {
  num = num.toString()
  if (num.length > 14) {
    num = "Error";
  }
  $(".inner-answer").text(num);
}


$(function () {
  //this sets the button being clicked as the current target
  //this will allow the number value to go into the calculator
  $(".numbutton").click(function(event) {
      var node = event.currentTarget;
      var elem = $(node);
      var text = elem.text();
      // if the equal sign is used this returns a value 
      //if two numbers have been entered with an operator in between them
      if (text == "=") {
        var answer = eval(one + operator + two);
        output(answer);
        one = answer;
        two = "";
        operator = null;
        return;
      }
      // this allows the user to continue to enter additional numbers
      if (twoPending()) {
        two += text; //same as saying (two + text)
        output(two);
      } else {
        one += text;
        output(one);
      }
  })
  //this clears the calculator when you use the clear button
  //clears all variables and operators and returns number shown to zero
  $(".clear").click(function() {
    one = "";
    two = "";
    operator = null;
    output(0);
  })
  //this is where the /,*,+,- operators are 
  $(".optbutton").click(function() {
    var node = event.currentTarget;
    var elem = $(node);
    var opt = elem.text();
    //if the operator and both numbers all equal true then the answer will be shown
    //if not variable two will be empty and variable one will be in the screen
    if (opt && one && two) {
      var answer = eval(one + operator + two);
      output(answer);
      two = "";
      one = answer;
    }
    operator = opt
  })

  $(".div").on("click", function() {
      $(".divide").css({"color": "red"});
    });
  $(".mult").on("click", function() {
      $(".multiply").css({"color": "red"});
    });
  $(".subt").on("click", function() {
      $(".subtract").css({"color": "red"});
    });
  $(".add").on("click", function() {
      $(".addition").css({"color": "red"});
    });
})




