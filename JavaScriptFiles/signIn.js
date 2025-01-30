let form = document.getElementById("signInForm");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let btn = document.getElementById("signInButton");
var passwordCorrect = false;
var userArray = JSON.parse(localStorage.getItem("Users")) || [];

if (performance.navigation.type === 1) {
    window.location.href = "../HTMLFiles/startPagehtml.html";
}

btn.addEventListener("click", function(event){
    event.preventDefault();
    

        //Check if the user is already saved at the local storage
        let found = userArray.find(item => item.Email === email.value)
        if(found){
            passwordValidation(password);
            if(passwordCorrect){

                alert("Welcom!")
                window.location.replace("../HTMLFiles/startExam.html");
            }
        }else{
            alert("User is not found, Sign up!");
        }    

    console.log("Sign up button clicked!");
});

function passwordValidation(pass){
    let found = userArray.find(item => item.Pass === pass.value)
    if(found){
        passwordCorrect = true;
    }else{
        console.log("Password is not true");
        
    }
}