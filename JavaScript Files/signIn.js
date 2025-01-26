let form = document.getElementById("signInForm");
let firstName = document.getElementById("firstNameInput");
let lastName = document.getElementById("lastNameInput");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let confirmPassword = document.getElementById("confirmPasswordInput");
let btn = document.getElementById("signInButton");


btn.addEventListener("click", function(event){
    event.preventDefault();
    
    // First name validation
    if(firstName.value == ""){
        console.log("This field is empty");
        showError("firstNameInput", "firstNameEpmty");
    }else if(typeof firstName.value != String){
        clearErrors();
        console.log("This field is not a string");
        showError("firstNameInput", "firstNameChar");
    }else{
        clearErrors();
        console.log("This field is valid");
    }

    // Last name validation
    if(lastName.value == ""){
        console.log("This field is empty");
        showError("lastNameInput", "lastNameEpmty");
    }else{
        clearErrors();
        console.log("This field is not empty")
    }

    // Email validation
    if(email.value == ""){
        console.log("This field is empty");
        showError("emailInput", "emailEpmty");
    }else{
        clearErrors();
        console.log("This field is not empty")
    }
    
    // Password validation
    if(password.value == ""){
        console.log("This field is empty");
        showError("passwordInput", "passwordEpmty");
    }else{
        clearErrors();
        console.log("This field is not empty")
    }
    
    // Confirm password validation
    if(confirmPassword.value == ""){
        console.log("This field is empty");
        showError("confirmPasswordInput", "confirmPasswordEpmty");
    }else{
        clearErrors();
        console.log("This field is not empty")
    }

    console.log("Sign In button clicked!");
});

function showError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add("input-error");
    error.style.display = "block";
}

function clearErrors() {
    const inputs = document.querySelectorAll(".input-error");
    const errors = document.querySelectorAll(".error-message");

    inputs.forEach(input => input.classList.remove("input-error"));
    errors.forEach(error => (error.style.display = "none"));
}