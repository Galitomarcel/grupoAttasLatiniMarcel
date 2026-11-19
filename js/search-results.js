let formheader = document.querySelector(".formbusqueda")
let inputheader = document.querySelector(".busqueda")
let mensajeerror = document.querySelector("#mensajeerror")

let resultado = document.querySelector(".explora")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get("busqueda")

let contenedor2 = document.querySelector(".masvendidos")

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

resultado.innerText = "Resultados de busqueda para: " + busqueda


fetch("https://dummyjson.com/products/search?q=" + busqueda)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let productos = data.products         

        if (productos.length == 0) {
            resultado.innerText = "No hay resultados para el término: " + busqueda

        } else {
            for (let i = 0; i < productos.length; i++) {
                contenedor2.innerHTML += `
                    <article class="tarjeta">
                        <img class="fotos" src="${productos[i].thumbnail}" alt="${productos[i].title}">
                        <h2>${productos[i].title}</h2>
                        <p>${productos[i].description}</p>
                        <h3>$${productos[i].price}</h3>
                        <a class="vermas" href="product.html?id=${productos[i].id}">Ver detalle</a>
                    </article>`
            }
        }

    })
    .catch(function (error) {
        console.log(error)
    })

    //traer las categorias a la barra de navegacion de la api

    let contcategorias = document.querySelector(".categoriasul")

    fetch("https://dummyjson.com/products/category-list")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let categorias = data        

        for (let i = 0; i < categorias.length; i++) {
            contcategorias.innerHTML += `
                <li>
                    <a href="category.html?categoria=${categorias[i]}">${categorias[i]}</a>
                </li>
                `
        }
    })
    .catch(function (error) {
        console.log(error)
    })