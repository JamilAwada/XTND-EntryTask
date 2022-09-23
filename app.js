// DOM Elements

// Inputs
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const amountInput = document.querySelector("#amount");

// Buttons
const form = document.querySelector("#form");
const clearButton = document.querySelector("#clearButton");
const submitButton = document.querySelector("#submitButton");
const checkmark = document.querySelector("#checkmark");

// Display
const popup = document.querySelector(".popup");

// Functionality

// Reset fields
clearButton.addEventListener("click", () => {
  nameInput.value = "";
  emailInput.value = "";
  amountInput.value = "";
});

// Popup toggler
function closePopUp() {
  popup.classList.remove("open-popup");
}

// Open popup on submit
form.addEventListener("submit", () => {
  popup.classList.add("open-popup");
});

// Clicking on the checkmark closes it
checkmark.addEventListener("click", () => {
  closePopUp();
});
