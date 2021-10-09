const form = document.getElementById("form-login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailValidation = document.getElementById("email-validation")
const passwordValidation = document.getElementById("password-validation")

window.addEventListener('load', function(){
    form.addEventListener("submit", (e) => {

        let formIsOk = true

        if (email.value == "" || email.value == null) {

            emailValidation.classList.remove("d-none")
            email.classList.add("border")
            email.classList.add("border-danger")

            formIsOk = false
        } else {
            emailValidation.classList.add("d-none")
            
            email.classList.remove("border")
            email.classList.remove("border-danger")
        }

        if (password.value == "" || password.value == null) {
            passwordValidation.classList.remove("d-none");
            password.classList.add("border")
            password.classList.add("border-danger")
            formIsOk = false
        } else {
            passwordValidation.classList.add("d-none")
            password.classList.remove("border")
            password.classList.remove("border-danger")
        }

        if (!formIsOk) {
            e.preventDefault()
        }
    })
})   
