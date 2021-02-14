let formInputs = document.querySelectorAll('.form-input');
const emailForm = document.getElementById('emailform');
const emailSubmit = document.getElementById('email_button');
const emailInput = document.getElementById('emailaddress');
const validation = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


// Set focus on first input without value
function setFocus() {
    console.log(formInputs);
    for (i = 0; i < formInputs.length; i++) {
        if (!formInputs[i].value) {
            formInputs[i].focus();
            break;
        }
    }
}

// Checks if active input has value
function isActive(e) {
    let isValidated;
    let inputValue = document.activeElement.value;
    let activeInput = document.activeElement;

    // if (emailInput.value.match(validation)) {
    //     emailValidated = true;
    // } else {
    //     emailValidated = false;
    // }

    if (inputValue != null) {
        isValidated = true;
    }

    if (inputValue === activeInput.defaultValue){ 
        isValidated = false;
    }

    switch (isValidated) {
        case true:
            activeInput.nextElementSibling.classList.add("valid");
            break;
        case false:
            activeInput.nextElementSibling.classList.remove("valid");
            activeInput.nextElementSibling.classList.add("active");
            break;
    }
}

// Trigger animation for input currently in focus

formInputs.forEach(focus => focus.addEventListener('focusout', () => {
    focus.nextElementSibling.classList.remove("active");
}));

// Prevent default browser form invalid input popup
document.querySelector( "#visitorname" )
    .addEventListener( "invalid", function( e ) {
        e.preventDefault();
    }, true );
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
    switch (emailValidated) {
        case false:
            console.log("No no no, no emails today!");
            emailInput.focus();
            emailInput.nextElementSibling.classList.remove('valid');
            emailInput.nextElementSibling.classList.add('active');
            break;
        case true:
            console.log("Yeeeeeeees, emails today!");
            emailjs.sendForm(service_id, template_id, emailForm);
            emailInput.nextElementSibling.classList.remove('active');
            emailForm.reset();
            break;
    }
    return false;
});

// event.preventDefault();

//   var service_id = "everyday_gourmet";
//   var template_id = "everyday_gourmet_email";

//   myform.find("button").text("Sending...");
//   emailjs.sendForm(service_id,template_id,myform[0])
//   	.then(function(){
//         myform.find("button").text("Sent!");
//     }, function(err) {
//        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
//        myform.find("button").text("Retry");
//     });
//     document.getElementById('emailform').reset();
//   return false;
