let formheader = document.querySelector(".formbusqueda")
let inputheader = document.querySelector(".busqueda")
let mensajeerror = document.querySelector(".mensajeerror")
//consigna 2, header y footer
formheader.addEventListener("submit", function(event){

    event.preventDefault()
    if (inputheader.value == "") {
        mensajeerror.innerText = "El campo de búsqueda no puede estar vacio"
    }
    else if (inputheader.value.length < 3) {
        mensajeerror.innerText = "La búsqueda debe tener al menos 3 caracteres"
    }
    else {
        formheader.submit()
    }
})