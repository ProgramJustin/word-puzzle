$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
  //stores user input
    var input = $('#input').val();
  // turn input into an array
    input = input.split("");
  //change the vowels for dashes
    for(i = 0; i < input.length; i++) {
      console.log(input[i]);
      if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
        input[i] = "-";
      }
    }
  //turn array back into a string
    input = input.join("");
  //show out the output
    $("#output").show();
  //output the string
    $("#output").append(input);
    //hide the form
    $("form").hide();
  });
});
