let form = document.getElementById("signInForm");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let btn = document.getElementById("signInButton");
var passwordCorrect = false;
var userArray = JSON.parse(localStorage.getItem("Users")) || [];
const popup = document.querySelector('.sticky-note');
const container = document.querySelector('.sticky-container'); 

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
                // alert("Welcom!")
                popupSuccess();
            }else{
                popUpNotValid();
            }
        }else{
            // alert("User is not found, Sign up!");
            popUpNotValid();
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
function popUpNotValid(){
   
    popup.textContent = "Not valid user data !";
    popup.classList.add('active');
    container.classList.add('active');
    setTimeout(() => {
        popup.classList.remove('active');
        container.classList.remove('active');
    }, 3000);
}
function popupSuccess(){
    popup.innerHTML =`Successfully signed in!
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
            window.location.replace("../HTMLFiles/startExam.html");

            }, 2000);
}