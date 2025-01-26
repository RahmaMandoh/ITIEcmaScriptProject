var nameError = document.querySelector('.name-error')
var ageError = document.querySelector('.age-error')
var emailError = document.querySelector('.email-error')
var nameInput = document.querySelector('#username')
var ageInput = document.querySelector('#userAge')
var emailInput = document.querySelector('#userEmail')
var tableContainer = document.querySelector('.table-container')
var tableBody = document.querySelector('tbody')
var add = document.querySelector('#add')
var emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
var namevalid = false
var agevalid = false
var emailvalid = false

// 
add.addEventListener('click' , function (e) {
    
    e.preventDefault();
    agevalidation(ageInput);
    emailvalidation(emailInput); 
    namevalidation(nameInput);
    if ( namevalid && agevalid && emailvalid) {
    let tr = document.createElement('tr')
    tr.innerHTML = `<td>${nameInput.value}</td>
                    <td>${ageInput.value}</td>
                    <td>${emailInput.value}</td>`
    nameInput.value = ''
    ageInput.value = ''
    emailInput.value = ''
    password.value = ''

    tableBody.appendChild(tr)
    tableContainer.style.display = "block"
    // after appending
    namevalid = false
    agevalid = false
    emailvalid = false
    }
    

})
// name validation 
function namevalidation(nameInput) {
    if (nameInput.value == '') {
        nameError.textContent = "Filed is required"
    
    } else if (isFinite(nameInput.value)) {
        nameError.textContent = "Characters only"
        nameInput.value = '';

    }
    else {
        nameError.textContent = ""
        namevalid = true;
    }  
}

// age validation
function agevalidation(ageInput){
    console.log(ageInput);
    
    if (ageInput.value == '') {
        ageError.textContent = "Filed is required"
    
    } else if (!isFinite(ageInput.value)) {
        ageError.textContent = "Numbers only"
        ageInput.value = '';
    }
    else {
        ageError.textContent = ""
        agevalid = true;
    }
}

// email validation
function emailvalidation(emailInput){
    if (emailInput.value == '') {
        emailError.textContent = "Filed is required"
    
    }else if (!(new RegExp(emailReg).test(emailInput.value)) && emailInput.value) {
        emailError.textContent = "Must write in this form name@example.com"
        emailInput.value = '';
    }
    else {
        emailError.textContent = ""
        emailvalid = true ;
    }
}

// for password
var show = document.querySelector('.show');
var password = document.querySelector('#password');

show.addEventListener('click' , function () {
    if (password.type == 'password') {
        show.innerHTML = `<i class="fa-solid fa-eye"></i>`

        password.type = 'text'
    } else {
        show.innerHTML = `<i class="fa-solid fa-eye-low-vision"></i>`
        
        password.type = 'password'
    }
})