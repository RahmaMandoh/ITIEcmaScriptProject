let form = document.getElementById("signUpForm");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let btn = document.getElementById("signUpButton");

btn.addEventListener("click", function(event){
    event.preventDefault();
    
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

    console.log("Sign up button clicked!");
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