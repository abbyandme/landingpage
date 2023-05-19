let sendButton = document.getElementById("sub-button");
const form = document.getElementById("newsletter-form");

function validateFirstName() {
    var fnError = document.querySelector("#firstName + span.fn-text");
    var fnname = document.getElementById('firstName').value;

    if (fnname.length == 0) {
        fnError.innerHTML = 'First name is required';
        return false;
    }
    if (!fnname.match(/^[A-Za-z]*$/)){
        fnError.innerHTML = 'Invalid characters';
        return false;
    }
    else {
        fnError.innerHTML = '';
        return true;
    }
}
function validateLastName() {
    var lnError = document.querySelector("#lastName + span.ln-text");
    var lnname = document.getElementById('lastName').value;

    if (lnname.length == 0) {
        lnError.innerHTML = 'Last name is required';
        return false;
    }
    if (!lnname.match(/^[a-zA-Z]+$/)){
        lnError.innerHTML = 'Invalid characters';
        return false;
    }
    else {
        lnError.innerHTML = '';
        return true;
    }
}
function validateEmail() {
    var emailError = document.querySelector("#email + span.email-text");
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    else {
        emailError.innerHTML = '';
        return true;
    }
}

sendButton.addEventListener('click', function(e) {
            e.preventDefault();
            sendButton.value = 'Send...';

            if(!validateFirstName() || !validateLastName() || !validateEmail()) {
                submitError.style.display = 'block'
                submitError.innerHTML = 'Please fix error to submit';
                setTimeout(function(){submitError.style.display = 'none';}, 5000);
                return false;
            } 
            else {
                return true;
            }
        });



