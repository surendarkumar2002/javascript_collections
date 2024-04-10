const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&()*+-/<=>?@[]^_{|}~";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  //   console.log(password);

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  console.log(password.length);
  passwordBox.value = password;
}

const copyText = document.querySelector(".copytext");
copyText.style.display = "none";

function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value);
  copyText.style.display = "block";
  setTimeout(() => {
    copyText.style.display = "none"; // Hide after 3 seconds
  }, 3000);
}
