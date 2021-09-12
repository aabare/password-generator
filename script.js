// Assignment code here
var restart = function() {
var length = window.prompt ("Please enter desired length for password");

if (length >=8 && length <=128) {
  
} else {
  confirm("Please enter different length value");
  restart();
}};
restart();

var lowercase = window.confirm ("Would you like to include lowercase characters?");

var uppercase = window.confirm ("Would you like to include uppercase characters?");

var numeric = window.confirm ("Would you like to include numeric characters?");

var special = window.confirm ("Would you like to include special characters?");

// Get references to the #generate element
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?', '/', '+', '-',]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
