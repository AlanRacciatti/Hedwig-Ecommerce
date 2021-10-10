const form = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailValidation = document.getElementById("email-validation")
const passwordValidation = document.getElementById("password-validation")

window.addEventListener('load', function(){
    
    email.addEventListener('blur', function(e){
        if (email.value.includes("@")) {
            emailValidation.classList.add("d-none");
            email.classList.remove("border");
            email.classList.remove("border-danger");
        } else {
            emailValidation.classList.remove("d-none");
            email.classList.add("border");
            email.classList.add("border-danger");
        }
    });

    password.addEventListener('blur', function(e){
        if (password.value == "" || password.value == null) {
            passwordValidation.classList.remove("d-none");
            password.classList.add("border");
            password.classList.add("border-danger");
        } else {
            passwordValidation.classList.add("d-none");
            password.classList.remove("border");
            password.classList.remove("border-danger");
        }
    });
});
 
