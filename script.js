// Assignment code here
var length = window.prompt ("Please enter desired length for password");
var lowercase = window.confirm ("Would you like to include lowercase characters?");
var uppercase = window.confirm ("Would you like to include uppercase characters?");
var numeric = window.confirm ("Would you like to include numeric characters?");
var special = window.confirm ("Would you like to include special characters?");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
