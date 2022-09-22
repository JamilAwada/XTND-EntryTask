// DOM Elements

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const amountInput = document.querySelector("#amount");

let nameOutput = document.querySelector("#name2");
let emailOutput = document.querySelector("#email2");
let amountOutput = document.querySelector("#amount2");

const form = document.querySelector("#form");
const clearButton = document.querySelector("#clearButton");
const submitButton = document.querySelector("#submitButton");
const checkmark = document.querySelector("#checkmark");

const popup = document.querySelector(".popup");

// Event Listener

clearButton.addEventListener('click', () => {
    nameInput.value = "";
    emailInput.value = "";
    amountInput.value = "";
});

function closePopUp() {
    popup.classList.remove("open-popup");
}

submitButton.addEventListener('click', () => {
    if (emailInput.value != "") {
        popup.classList.add("open-popup");
    }
    
})

checkmark.addEventListener('click', () => {
    closePopUp();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    var name = nameInput.value;
    var email = emailInput.value;
    var amount = amountInput.value;

    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('amount', amount);

    fetch('validator.php', {
        method : 'POST',
        body : formData,
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
       console.log(text);
    }).catch(function(error){
        console.error(error);
    })


    nameOutput.innerHTML = nameInput.value;
    emailOutput.innerHTML = emailInput.value;
    amountOutput.innerHTML = amountInput.value;


});
