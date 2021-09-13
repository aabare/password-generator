// Assignment code here
var generateBtn = document.querySelector("#generate");

//Variables
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

var specials = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/', '+', '-',]


//Event Listener
generateBtn.addEventListener("click", generatePassword)


//Window Prompts
function generatePassword() {

  var password = "";
  var passwordChar = "";
  var restart = function() {
    var length = window.prompt ("Please enter desired length for password");
    length = parseInt(length);
    if (length >=8 && length <=128) {
      
    } else {
      confirm("Please enter a value between 8 and 128");
      restart();
    }};
    restart();
  //Lowercase Selector  
    var lowercase = window.confirm ("Would you like to include lowercase characters?");
      if (lowercase) {
        passwordChar += lower;
      }

    //Uppercase Selector
    var uppercase = window.confirm ("Would you like to include uppercase characters?");
      if (uppercase) {
        passwordChar += upper;
      }

    //Numeric Selector
    var numeric = window.confirm ("Would you like to include numeric characters?");
        if (numeric) {
          passwordChar += numbers;
        }

    //Special Selector
    var special = window.confirm ("Would you like to include special characters?");
          if (special) {
          passwordChar += specials; 
          }
      
    //For Loop
          for (var i = 0; i < length; i++) {
        password = passwordChar [Math.floor(Math.random() * passwordChar.length)]
      }
      
 // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

  generateBtn.addEventListener("click", writePassword)

  }