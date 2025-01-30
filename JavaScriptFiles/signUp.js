let form = document.getElementById("signUpForm");
let firstName = document.getElementById("firstNameInput");
let lastName = document.getElementById("lastNameInput");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let confirmPassword = document.getElementById("confirmPasswordInput");
let btn = document.getElementById("signUpButton");
var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var fNamevalid = false;
var lNameValid = false;
var emailValid = false;
var passwordValid = false;
var confirmPassValid = false;
var errorMessageFirstName = document.getElementById("errorMessageFirstName");
var errorMessageLastName = document.getElementById("errorMessageLastName");
var errorMessageEmail = document.getElementById("errorMessageEmail");
var errorMessagePassword = document.getElementById("errorMessagePassword");
var errorMessageConf = document.getElementById("errorMessageConf");



btn.addEventListener("click", function(event){
    event.preventDefault();
    
    // First name validation
    firstNamevalidation(firstName);
    
    // Last name validation
    lastNamevalidation(lastName);

    // Email validation
    emailValidation(email);
    
    // Password validation
    passwordValidation(password);
    
    // Confirm password validation
    confirmPassValidation(confirmPassword);

    // Check if all validations passed
    if (fNamevalid && lNamevalid && emailValid && passwordValid && confirmPassValid) {
        // Save user data in localStorage as an array
        
        // console.log("User information saved:", userData);
        alert("User information saved successfully!");
        window.location.href = "../HTMLFiles/signInhtml.html";
    } else {
        alert("Please fix the errors in the form before submitting.");
    }
    
    console.log("Sign Up button clicked!");
});

function firstNamevalidation(nameInput) {
    if (nameInput.value.trim() === "") {
        errorMessageFirstName.textContent = "Filed is required";
    } else if (isFinite(nameInput.value.trim())) {
        errorMessageFirstName.textContent = "Required characters only";
    } else if (nameInput.value.trim().length < 2){
        errorMessageFirstName.textContent = "Length more than 2";
    } else {
        errorMessageFirstName.textContent = "";
        fNamevalid = true;
    }  
}

function lastNamevalidation(nameInput) {
    if (nameInput.value.trim() === "") {
        errorMessageLastName.textContent = "Filed is required";
    } else if (isFinite(nameInput.value.trim())) {
        errorMessageLastName.textContent = "Required characters only";
    } else if (nameInput.value.trim().length < 2){
        errorMessageLastName.textContent = "Length more than 2";
    } else {
        errorMessageLastName.textContent = "";
        lNamevalid = true;
    }  
}

function emailValidation(mail){
    if(mail.value.trim() === ""){
        errorMessageEmail.textContent = "Filed is required";
    }else if(!emailReg.test(mail.value.trim())){
        errorMessageEmail.textContent = "Invalid email";
    }else{
        errorMessageEmail.textContent = "";
        emailValid = true;
    }
}

function passwordValidation(pass){
    if(pass.value.trim() === ""){
        errorMessagePassword.textContent = "Filed is required";
    }else if (!strongPasswordRegex.test(pass.value.trim())) {
        errorMessagePassword.textContent = `Password must be at least 8 characters long,
                                        include a number,an uppercase letter, 
                                        a lowercase letter, and a special character`;
    }else{
        errorMessagePassword.textContent = "";
        passwordValid = true;
    }
}

function confirmPassValidation(confPass){
    if (confPass.value.trim() === "") {
        errorMessageConf.textContent = "Filed is required";
    } else if (confPass.value.trim() !== passwordInput.value.trim()) {
        errorMessageConf.textContent = "Passwords do not match";
    } else {
        errorMessageConf.textContent = "";
        confirmPassValid = true;
    }
}