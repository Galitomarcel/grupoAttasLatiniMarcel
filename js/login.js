let formlogin = document.querySelector(".Login_form")
let emaillogin = document.querySelector("#email")
let passwordlogin = document.querySelector("#password")
let mensajelogin = document.querySelector("#mensajelogin")

//punto 6 pagina login - 7.a Validación y guardado de datos en storage.
formlogin.addEventListener("submit", function(event) {
    event.preventDefault()

    if (emaillogin.value == "") {
        mensajelogin.innerText = "El email es obligatorio"
    }

    else if (passwordlogin.value == "") {
         mensajelogin.innerText = "La contraseña es obligatoria"
    }

    else if (passwordlogin.value.length < 6) {
        mensajelogin.innerText = "La contraseña debe tener al menos 6 caracteres"
    }

    else {
        localStorage.setItem("email", emaillogin.value)
        window.location.href = "./index.html"
    }
})