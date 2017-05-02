$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    //get the input and store it
    var input = $('#input').val();
    var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

    //turn the input into an array
    input = input.split("");

    //replace vowels with '-'
    for (var i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        input[i] = "-";
      }
    }

    //turn array back into string
    input = input.join("");

    //hide form
    $('form').hide();

    //display output div
    $('#output').show();
    $('#output').text(input);


  });
});
