let formInputs = document.querySelectorAll('.form-input');
const emailSubmit = document.getElementById('email_button');
const emailForm = document.getElementById('emailform');

const emailInput = document.getElementById('emailaddress');
const nameInput = document.getElementById('visitorname');
const messageInput = document.getElementById('emailcontent');

const validation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const nameAndMessageValidation = /\d/;

let isEmailValidated = false;
let isMessageValidated = false;
let isNameValidated = false;

// Set focus on first input without value
function setFocus() {
    for (i = 0; i < formInputs.length; i++) {
        if (!formInputs[i].value) {
            formInputs[i].focus();
            break;
        }
    }
}

// Checks if active input has value
// 
function isActive() {
    let isInputValidated = false;
    
    let inputValue = document.activeElement.value;
    let activeInput = document.activeElement;
    let showEmailButton = document.querySelectorAll('.call-to-action-hi');

    // EMAIL VALIDATION
    if (emailInput.value.match(validation)) {
        isEmailValidated = true;
    } 
    else {
        isEmailValidated = false;
    }

    // NAME VALIDATION
    if (nameAndMessageValidation.test(nameInput.value)) {
        isNameValidated = false;
    }
    else {
        isNameValidated = true;
    }

    // MESSAGE VALIDATION
    if (messageInput.value === messageInput.defaultValue) {
        isMessageValidated = false;
    }
    else {
        isMessageValidated = true;
    }


    // CHECK INPUTS ARE NOT EMPTY
    if (inputValue != null) {
        isInputValidated = true;
    }

    if (inputValue === activeInput.defaultValue){ 
        isInputValidated = false;
    }

    // SHOW OR REMOVE TOOTIP
    // SWITCH TEXT INPUT COLOR ON VALID OR INVALID
    switch (isInputValidated) {
        case true:
            activeInput.nextElementSibling.classList.add("valid");
            activeInput.style.color = "#0ada0acc";
            break;
        case false:
            activeInput.nextElementSibling.classList.remove("valid");
            activeInput.nextElementSibling.classList.add("active");
            activeInput.style.color = "#ff0000";
            break;
    }

    // SWITCH TEXT INPUT INDIVIDUALLY COLOR ON VALID OR INVALID
    switch (isNameValidated) {
        case true:
            nameInput.style.color = "#0ada0acc";
            break;
        case false:
            nameInput.nextElementSibling.classList.remove("valid");
            nameInput.nextElementSibling.classList.add("active");
            nameInput.style.color = "#ff0000";
            break;
    }

    switch (isEmailValidated) {
        case true:
            emailInput.style.color = "#0ada0acc";
            break;
        case false:
            emailInput.style.color = "#ff0000";
            break;
    }

    switch (isMessageValidated) {
        case true:
            messageInput.style.color = "#0ada0acc";
            break;
        case false:
            messageInput.style.color = "#ff0000";
            break;
    }

    // SHOW SEND EMAIL BUTTON
    switch (isNameValidated && isEmailValidated && isMessageValidated) {
        case true:
            showEmailButton[1].classList.add('active');
            break;
        case false:
            showEmailButton[1].classList.remove('active');
            break;
    }
}

// Trigger animation for input currently in focus
formInputs.forEach(focus => focus.addEventListener('focusout', () => {
    focus.nextElementSibling.classList.remove("active");
}));

// Double up Prevent default browser form invalid input popup
document.querySelector( "form" )
    .addEventListener( "invalid", function( e ) {
        e.preventDefault();
}, true );

// Validate email syntax on submit
emailForm.addEventListener('submit', (e) => {
    let visitorEmail = emailInput.value;
    let emailValidated = false;
    const service_id = "angry_cat_ao@heih!1";
    const template_id = "portfolio_cX69AB4A";

    e.preventDefault();

    if (visitorEmail.match(validation)) {
        emailValidated = true;
    } else {
        emailValidated = false;
    }
    switch (emailValidated && isNameValidated && isEmailValidated && isMessageValidated) {
        case false:
            console.log("No no no, no emails today!");
            activeElement.nextElementSibling.classList.remove('valid');
            activeElement.nextElementSibling.classList.add('active');
            break;
        case true:
            console.log("Yeeeeeeees, emails today!");
            emailjs.sendForm(service_id, template_id, emailForm);
            emailForm.reset();
            break;
    }
    return false;
});
