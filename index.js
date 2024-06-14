const content = document.getElementById("content");
const generate = document.getElementById("generate");
const clear = document.getElementById("clear");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");

const passworLength = 8;

generate.onclick = function() {

    let password = "";

    let allCharsInPassword = "";

    const upperCaseChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const lowerCaseChars = "qwertyuiopasdfghjklzxcvbnm";
    const symbolChars = "!@#$%^&*()_+-";
    const numberChars = "1234567890";

    allCharsInPassword += uppercase.checked ? upperCaseChars : "";
    allCharsInPassword += lowercase.checked ? lowerCaseChars : "";
    allCharsInPassword += symbols.checked ? symbolChars : "";
    allCharsInPassword += numbers.checked ? numberChars : "";

    if(!uppercase.checked && !lowercase.checked && !symbols.checked && !numbers.checked){
        content.textContent = "You should choose at least one options"
    } else {

        for(let i = 0; i < passworLength; i++) {
            let randomIndex = Math.floor(Math.random() * allCharsInPassword.length)
            password += allCharsInPassword[randomIndex]
        }
            
        
        content.textContent = password;
    }
    


}

clear.addEventListener("click", function () {
    content.textContent = "Press Generate to create uniq random password"
    uppercase.checked = false;
    lowercase.checked = false;
    symbols.checked = false;
    numbers.checked = false;
})