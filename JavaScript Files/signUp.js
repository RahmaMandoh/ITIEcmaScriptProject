let form = document.getElementById("signUpForm");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let btn = document.getElementById("signUpButton");

btn.addEventListener("click", function(event){
    event.preventDefault();
    
    // Email validation
    if(email.value.trim() === ""){
        clearError("emailInput", "invalidEmail");
        showError("emailInput", "emailEpmty");
    }else if(!emailReg.test(email.value.trim())){
        clearError("emailInput", "emailEpmty");
        showError("emailInput", "invalidEmail");
    }else{
        clearError("emailInput", "emailEpmty");
        clearError("emailInput", "invalidEmail");
    }
    
    // Password validation
    if(password.value.trim() === ""){
        clearError("passwordInput", "weakPassword");
        showError("passwordInput", "passwordEpmty");
    }else if (!strongPasswordRegex.test(passwordInput.value.trim())) {
        clearError("passwordInput", "passwordEpmty");
        showError("passwordInput", "weakPassword"); 
    }else{
        clearError("passwordInput", "passwordEpmty");
        clearError("passwordInput", "weakPassword");
    }

    console.log("Sign up button clicked!");
});

function showError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.add("input-error");
    error.style.display = "block";
}

function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input.classList.remove("input-error"); 
    error.style.display = "none"; 
}