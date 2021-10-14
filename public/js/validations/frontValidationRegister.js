const form = document.getElementById('form-register')

const email = document.getElementById("email-register");
const emailValidation = document.getElementById("email-validation-register");

const fotoPerfil = document.getElementById("image-register")

const nombre = document.getElementById("name-register");
const nombreValidation = document.getElementById("name-register-validation");

const fechaNacimiento = document.getElementById('fecha-nacimiento-register');
const fechaNacimientoValidation= document.getElementById('fecha-nacimiento-register-validation');

const password = document.getElementById('password-register');
const passwordValidation = document.getElementById('password-register-validation');

const confirmPassword = document.getElementById('confirm-password-register');
const confirmPasswordValidation = document.getElementById('confirm-password-register-validation');


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

    nombre.addEventListener('blur', function(e){
        if (nombre.value == "" || nombre.value == null){
            nombreValidation.classList.remove("d-none");
            nombre.classList.add("border");
            nombre.classList.add("border-danger");
        }else{
            nombreValidation.classList.add("d-none");
            nombre.classList.remove("border");
            nombre.classList.remove("border-danger");
        }
    });

    fechaNacimiento.addEventListener('blur', function(e){
        
        if (new Date(fechaNacimiento.value)>new Date("1920-01-01") && new Date(fechaNacimiento.value)<new Date("2008-01-01")){
            fechaNacimientoValidation.classList.add("d-none");
            fechaNacimiento.classList.remove("border");
            fechaNacimiento.classList.remove("border-danger");
        }else{
            fechaNacimientoValidation.classList.remove("d-none");
            fechaNacimiento.classList.add("border");
            fechaNacimiento.classList.add("border-danger");
        }
    })

    password.addEventListener('blur', function(e){
        if (password.value == "" || password.value.length<8) {
            passwordValidation.classList.remove("d-none");
            password.classList.add("border");
            password.classList.add("border-danger");
        } else {
            passwordValidation.classList.add("d-none");
            password.classList.remove("border");
            password.classList.remove("border-danger");
        }
    });

    confirmPassword.addEventListener('blur', function(e){
        if (password.value == confirmPassword.value){
            confirmPasswordValidation.classList.add("d-none");
            confirmPassword.classList.remove("border");
            confirmPassword.classList.remove("border-danger");
        } else{
            confirmPasswordValidation.classList.remove("d-none");
            confirmPassword.classList.add("border");
            confirmPassword.classList.add("border-danger")
        }
    })
});