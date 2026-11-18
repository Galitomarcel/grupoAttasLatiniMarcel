let formRegistro = document.querySelector (".reg_form")
let inputEmail = document.querySelector("#email")
let inputPassword = document.querySelector("#password")
let inputRepetirPassword = document.querySelector("#repassword")
let checkTerminos = document.querySelector (".respuestabusqueda")
let errorRegistro = document.querySelector ("#error-registro")

formRegistro.addEventListener("submit", function(event){
    event.preventDefault()
    if (inputEmail.value == ""){
        errorRegistro.innerText = "El email es obligatorio"
    }
    else if (inputPassword.value == ""){
        errorRegistro.innerText = "La contraseña es obligatoria"
    }
    else if (inputPassword.value.length < 6){
        errorRegistro.innerText = "La contraseña debe de tener al menos 6 caracteres"
    }
    else if (inputPassword.value != inputRepetirPassword.value){
        errorRegistro.innerText = "Las contraseñas debe de coincidir"
    }
    else if (checkTerminos.checked == false){
        errorRegistro.innerText = "Debes de aceptar los terminos y condiciones"
    }
    else{
        formRegistro.submit()
    }
})