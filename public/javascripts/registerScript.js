"use strict";
const form = document.getElementById('register');

function hasEmptyFields(fields){
    for(let i=0; i<=4; i++){
        if(!fields[i].value){
            alert('You may not leave fields empty.\n\nPlease try again.');
            return false;
        }
    }
    
    return true;
}

function isGenderSelected(genderButtons){
    for(let i=0; i < genderButtons.length; i++){
        if(genderButtons[i].checked === true)
            return true;
    }

    alert('Please select a Gender.');
    return false;
}

function isValidEmail(email){
    //regex found here https://www.w3resource.com/javascript/form/email-validation.php
    
    let isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);

    if(!isValid)
        alert('Please enter a correctly formatted email address.');

    return isValid;
}

function isValidPassword(password){
    if(password.value.length >= 8)
        return true;
    else{
        alert('Password must be at least 8 characters long.');
        return false;
    }
}

function isMatchingPassword(password, confirmPassword){
    if(password.value === confirmPassword.value)
        return true;
    else{
        alert('Passwords must match.');
        return false;
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if(!hasEmptyFields(form.elements))
        return;
    if(!isGenderSelected(form.elements['inlineRadioOptions']))
        return;
    if(!isValidEmail(form.elements['email']))
        return;
    if(!isValidPassword(form.elements['password']))
        return;
    if(!isMatchingPassword(form.elements['password'], form.elements['confirmPassword']))
        return;
    
    form.submit();
});
