// Assignment code here
var generateBtn = document.querySelector("#generate");

 // Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//Window Prompts
function generatePassword() {

    var length = window.prompt ("Please enter desired length for password");
    if (length >=8 && length <=128) {
      
    } else {
      alert("Please choose a value between 8 and 128");
      return;
    }

  var choices = [];
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specials = "!@#$%^&*()-_+=<>?/,.";
  //Lowercase Selector  
    var lowercase = window.confirm ("Would you like to include lowercase characters?");
      if (lowercase ===  true) {
        for (var i = 0; i < lower.length; i++) {
          choices.push(lower[i]);
        }
      }
    //Uppercase Selector
    var uppercase = window.confirm ("Would you like to include uppercase characters?");
    if (uppercase ===  true) {
      for (var i = 0; i < upper.length; i++) {
        choices.push(upper[i]);
      }
    }
    //Numeric Selector
    var numeric = window.confirm ("Would you like to include numeric characters?");
    if (numeric ===  true) {
      for (var i = 0; i < numbers.length; i++) {
        choices.push(numbers[i]);
      }
    }
    //Special Selector
    var special = window.confirm ("Would you like to include special characters?");
    if (special ===  true) {
      for (var i = 0; i < specials.length; i++) {
        choices.push(specials[i]);
      }
    }
    //For Loop 
    var newPassword = "";
          for (var i = 0; i < length; i++) {
            choices[Math.floor(Math.random() * choices.length)];
            newPassword +=
              choices[Math.floor(Math.random() * choices.length)];
      }
      
          return newPassword;
    }

  generateBtn.addEventListener("click", writePassword)
