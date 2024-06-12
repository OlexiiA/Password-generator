const content = document.getElementById("content");
const generate = document.getElementById("generate");
const clear = document.getElementById("clear");

const passworLength = 8;
const isUpperCase = true;
const isLowerCase = true;
const isSymbol = true;
const isNumber = true;

generate.onclick = function() {

    let password = "";

    let allCharsInPassword = "";

    const upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const symbolChars = "!@#$%^&*()_+-";
    const numberChars = "1234567890";

    allCharsInPassword += isUpperCase ? upperCaseChars : "";
    allCharsInPassword += isLowerCase ? lowerCaseChars : "";
    allCharsInPassword += isSymbol ? symbolChars : "";
    allCharsInPassword += isNumber ? numberChars : "";

for(let i = 0; i < passworLength; i++) {
    let randomIndex = Math.floor(Math.random() * allCharsInPassword.length)
    password += allCharsInPassword[randomIndex]
}
    

content.textContent = password;

}

clear.onclick = function () {
    content.textContent = "Press Generate to create uniq random password"
}