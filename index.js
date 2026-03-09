const inputArea = document.querySelector(".input");
const copyIcon = document.querySelector(".icon");
const generateBtn = document.querySelector(".generateBtn");
const lowerPart = document.querySelector(".lowerPart");

const passwordReveal = document.querySelector(".passwordReveal");

const maxChars = 14;
const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

generateBtn.addEventListener("click", () => {
  const newPassword = generatePassword();
  inputArea.value = newPassword;

  // This hides the "Copied" message when a NEW password is made
  lowerPart.classList.remove("checked");
});

function generatePassword() {
  let password = "";
  for (let index = 0; index < maxChars; index++) {
    randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

copyIcon.addEventListener("click", () => {
  if (inputArea.value !== "") {
    // 1. Copy the text
    navigator.clipboard.writeText(inputArea.value);

    // 2. Update the revealed text
    passwordReveal.innerText = inputArea.value;

    // 3. Add the class to show it (and just leave it there)
    lowerPart.classList.add("checked");
  }
});
