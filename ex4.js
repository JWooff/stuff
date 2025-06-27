const input = require('readline-sync');

function getValidInput(prompt,isValid) {
   
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
        console.log("Invalid input. Try again.");
        userInput = input.question(prompt);
    }
    return userInput;
}
let isValid = function(password) {

    if (password[0] !== 'a') {
        return false;
    }
   return true;
}

console.log(getValidInput('Create a password:', isValid));