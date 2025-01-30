let signIn = document.getElementById("signInbtn");

if (performance.navigation.type === 1) {
    window.location.href = "../HTMLFiles/startPagehtml.html";
}
 
signIn.addEventListener("click", function(event){
    console.log("Clicked!");
    window.location.href = "../HTMLFiles/signInhtml.html";
});