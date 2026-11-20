let formheader = document.querySelector(".formbusqueda")
let inputheader = document.querySelector(".busqueda")
let mensajeerror = document.querySelector("#mensajeerror")
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
                    <a href="./category.html?categoria=${categorias[i]}">${categorias[i]}</a>
                </li>
            `
        }
    })
    
    .catch(function (error) {
        console.log(error)
    })

    let queryString = location.search
    let queryStringObj = new URLSearchParams(queryString)
    let categoria = queryStringObj.get("categoria")
    let titulo = document.querySelector(".MENS")
    titulo.innerText = categoria

    fetch("https://dummyjson.com/products/category/" + categoria)
    .then (function(response) { 
        return response.json()
    })
    .then (function (data) {
        let productos = data.products
        let contenedor = document.querySelector(".category")

        for (let i =0; i<productos.length; i++) {
            contenedor.innerHTML += `
                <article>
                    <img class="foto" src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    <h2>${productos[i].title}</h2>
                    <p class="desc">${productos[i].description}</p>
                    <h3>$${productos[i].price}</h3>
                    <a class="vermas" href="./product.html?id=${productos[i].id}">VER DETALLE</a>
                </article>
            `
        }
       vermas.addEventListener("mouseover", function () {
        if (vermas.style.backgroundColor == "green") {
            vermas.style.backgroundColor = ""
        }
        else {
            vermas.style.backgroundColor = "green"
        }

    })
    })
    .catch (function(error) {
        console.log(error)
    })