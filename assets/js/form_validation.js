

let emailForm = document.getElementById("#emailform");

// console.log(fromName.value);
// console.log(fromEmail.value);
// console.log(emailContent.value);

// function checkValidity(fromName) {

//     if (fromName.value != fromName.defaultValue) {
//         fromName.nextElementSibling.classList.remove("active");
//     }

//     // if (pwd1 == pwd2) {
//     //   $("#password_confirm").text(`Passwords match!`);
//     //   $("#register_user_button").removeClass("disabled");
//     //   passwordsMatch = true;
//     // } else {
//     //   $("#password_confirm").text(`Passwords do not match!`);
//     //   $("#register_user_button").addClass("disabled");
//     // }
//   }

function myFunction(e) {
    let isValidated = false;

    let fromName = document.querySelector("#visitorname");

    // let fromEmail = document.getElementById("#emailaddress");
    // let emailContent = document.getElementById("#emailcontent");

    let inputValue = document.getElementById("visitorname").value;

    if (inputValue != null) {
        console.log(inputValue);
        isValidated = true;
        console.log(isValidated + " should be true");
        fromName.nextElementSibling.classList.add("valid");
    }

    console.log(inputValue + " inputValue before if statement");
    console.log(fromName.value + " fromName");
    
    if (fromName.value === fromName.defaultValue){ 
        isValidated = false;
        console.log(isValidated + "should be false");
    }

    if (isValidated === false ) {
        fromName.nextElementSibling.classList.remove("valid");
        fromName.nextElementSibling.classList.add("active")
    }
  }


document.querySelector( "#visitorname" )
    .addEventListener( "invalid", function( e ) {
        e.preventDefault();
        // console.log(e);
        // e.target.nextElementSibling.classList.add("active");
    }, true );
    document.querySelector( "form" )
    .addEventListener( "invalid", function( e ) {
        e.preventDefault();
    }, true );

// document.querySelector("#emailform").addEventListener("valid", function (e){
//     e.target.nextElementSibling.classList.remove("active");
// });


    // function replaceValidationUI( form ) {
    //     // Suppress the default bubbles
    //     form.addEventListener( "invalid", function( event ) {
    //         event.preventDefault();
    //     }, true );
    
    //     // Support Safari, iOS Safari, and the Android browser—each of which do not prevent
    //     // form submissions by default
    //     form.addEventListener( "submit", function( event ) {
    //         if ( !this.checkValidity() ) {
    //             event.preventDefault();
    //         }
    //     });
    
    //     var submitButton = form.querySelector( "button:not([type=button]), input[type=submit]" );
    //     submitButton.addEventListener( "click", function( event ) {
    //         var invalidFields = form.querySelectorAll( ":valid" ),
    //             errorMessages = form.querySelectorAll( ".error-message" ),
    //             parent;
    
    //         // Remove any existing messages
    //         for ( var i = 0; i < errorMessages.length; i++ ) {
    //             errorMessages[ i ].parentNode.removeChild( errorMessages[ i ] );
    //         }
    
    //         for ( var i = 0; i < invalidFields.length; i++ ) {
    //             parent = invalidFields[ i ].parentNode;
    //             parent.insertAdjacentHTML( "beforeend", "<div class='error-message'></div>" );
    //         }
    
    //         // If there are errors, give focus to the first invalid field
    //         if ( invalidFields.length > 0 ) {
    //             invalidFields[ 0 ].focus();
    //         }
    //     });
    // }
    
    // // Replace the validation UI for all forms
    // var forms = document.querySelectorAll( "form" );
    // for ( var i = 0; i < forms.length; i++ ) {
    //     replaceValidationUI( forms[ i ] );
    // }