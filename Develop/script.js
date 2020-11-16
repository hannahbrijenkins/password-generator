// Assignment code here
// Select Criteria
// ask length of password (at least 8, no more thant 128)
function passwordLength() {
  var length = window.prompt("How many characters would you like your password to be?");

  function
}
// choose character types
var number = "1234567890"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "~!@#$%^&*();:',<.>/?]"
// password generated

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
