// import { userArray } from "./startPage.js"; 

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
var userArray = JSON.parse(localStorage.getItem("Users")) || [];
const popup = document.querySelector('.sticky-note');
const container = document.querySelector('.sticky-container');


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
        let user = {
            NFirst : firstName.value,
            NLast : lastName.value,
            Email : email.value,
            Pass : password.value
        }

        //Check if the user is already saved at the local storage
        let found = userArray.find(item => item.Email === user.Email)
        if(!found){
            userArray.push(user);
            console.log(userArray);
            localStorage.setItem("Users", JSON.stringify(userArray));
            // alert("User information saved successfully!");
            popup.innerHTML =`User Successfully Saved!
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 100 L80 160 L180 40" stroke="green" stroke-width="9" fill="transparent" stroke-linecap="round" stroke-linejoin="round">
                    <animate attributeName="stroke-dasharray" from="0, 300" to="300, 0" dur="1.5s" fill="freeze"/>
                </path>
                
                <circle cx="180" cy="40" r="5" fill="black">
                    <animateMotion dur="1.5s" fill="freeze" path="M20 100 L80 160 L180 40" keyPoints="0;1" keyTimes="0;1" />
                </circle>
            </svg>`
            popup.classList.add('active');
            container.classList.add('active');
            setTimeout(() => {
            window.location.replace("../HTMLFiles/signInhtml.html");
                
            }, 2000);
        }else{
            console.log("User is already saved at the local storage");
            popup.textContent = "This user already exists !";
            popup.classList.add('active');
            container.classList.add('active');
            setTimeout(() => {
                popup.classList.remove('active');
                container.classList.remove('active');
            }, 3000);
        }
        
    } else {
        //alert("Please fix the errors in the form before submitting.");
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