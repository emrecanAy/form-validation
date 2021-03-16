const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

//Error
function error(input, message){
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}

//Success
function success(input){
    input.className = "form-control is-valid";
}

//Checking the passwords to match
function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        error(input2, "Passwords are not matching!");
    }
}

//Checking all inputs to blank
function checkRequired(inputs){

    inputs.forEach(function(input){
        if(input.value === ""){
            error(input, `${input.id} is required!`);
        } else{
            success(input);
        }
    });

}

//Checking the phone number to valid chars
function checkPhone(input){

    const exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input, "Phone number must have 10 characters!");
    }
}

//Checking the email to valid chars
function checkEmail(input){

    const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

    if(exp.test(input.value)){
        success(input);
    } else{
        error(input, "Wrong email address!");
    }
}

//Checking input lengths 
function checkLength(input, min, max){

    if(input.value.length < min){
        error(input, `${input.id} must have at least ${min} characters!`);
    } else if(input.value.length > max){
        error(input, `${input.id} must have maximum ${min} characters!`);
    } else{
        success(input);
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault(); //if you want to use this js file, you can delete this line.

    checkRequired([username, email, password, repassword, phone ]);
    checkPasswords(password, repassword);
    checkLength(username, 7, 15);
    checkLength(password, 7, 25);
    checkEmail(email);
    checkPhone(phone);

});
