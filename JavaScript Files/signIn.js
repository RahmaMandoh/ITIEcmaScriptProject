let form = document.getElementById("signInForm");
let firstName = document.getElementById("firstNameInput");
let lastName = document.getElementById("lastNameInput");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let confirmPassword = document.getElementById("confirmPasswordInput");
let btn = document.getElementById("signInButton");
var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


btn.addEventListener("click", function(event){
    event.preventDefault();
    
    // First name validation
    if (firstName.value.trim() === "") {
        clearError("firstNameInput", "firstNameChar");
        clearError("firstNameInput", "firstNameLen");
        showError("firstNameInput", "firstNameEpmty");
    } else if (isFinite(firstName.value.trim())) {
        clearError("firstNameInput", "firstNameEpmty");
        clearError("firstNameInput", "firstNameLen");
        showError("firstNameInput", "firstNameChar");
    }else if (firstName.value.trim().length < 2) {
        clearError("firstNameInput", "firstNameEpmty");
        clearError("firstNameInput", "firstNameChar");
        showError("firstNameInput", "firstNameLen");
    } else {
        clearError("firstNameInput", "firstNameEpmty");
        clearError("firstNameInput", "firstNameChar");
        clearError("firstNameInput", "firstNameLen");
    }

    // Last name validation
    if (lastName.value.trim() === "") {
        clearError("lastNameInput", "lastNameChar");
        clearError("lastNameInput", "lastNameLen");
        showError("lastNameInput", "lastNameEpmty");
    } else if (isFinite(lastName.value.trim())) {
        clearError("lastNameInput", "lastNameEpmty");
        clearError("lastNameInput", "lastNameLen");
        showError("lastNameInput", "lastNameChar");
    }else if (lastName.value.trim().length < 2) {
        clearError("lastNameInput", "lastNameEpmty");
        clearError("lastNameInput", "lastNameChar");
        showError("lastNameInput", "lastNameLen");
    } else {
        clearError("lastNameInput", "lastNameEpmty");
        clearError("lastNameInput", "lastNameChar");
        clearError("lastNameInput", "lastNameLen");
    }

    // // Email validation
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
    
    // // Password validation
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
    
    // // Confirm password validation
    if (confirmPassword.value.trim() === "") {
        clearError("confirmPasswordInput", "passwordMismatch");
        showError("confirmPasswordInput", "confirmPasswordEpmty"); 
    } else if (confirmPassword.value.trim() !== passwordInput.value.trim()) {
        clearError("confirmPasswordInput", "confirmPasswordEpmty");
        showError("confirmPasswordInput", "passwordMismatch"); 
    } else {
        clearError("confirmPasswordInput", "confirmPasswordEpmty");
        clearError("confirmPasswordInput", "passwordMismatch");
    }

    console.log("Sign In button clicked!");
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