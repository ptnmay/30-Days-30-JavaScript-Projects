const passwordBox = document.getElementById("password");
const len = 29;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+{}|:<>?~-=[];,./";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";

    while (len > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]; }

    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}