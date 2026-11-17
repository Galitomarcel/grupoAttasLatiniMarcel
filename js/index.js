let formheader = document.querySelector(".formbusqueda")
let inputheader = document.querySelector(".busqueda")
let mensajeerror = document.querySelector("#mensajeerror")

let contenedor = document.querySelector(".masvendidos") //productos articul
let contenedor1 = document.querySelector(".masvendidos1") //productos articul

let contcategorias = document.querySelector(".categoriasul") //api de categorias

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


fetch("https://dummyjson.com/products/category/mens-watches")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let productos = data.products         

        for (let i = 0; i < productos.length; i++) {
            contenedor.innerHTML += `
                <article>
                    <img class="foto" src="${productos[i].thumbnail}" alt="foto1">
                    <h2>${productos[i].title}</h2>
                    <p class="desc">${productos[i].description}</p>
                    <h3>$${productos[i].price}</h3>
                    <a class="vermas" href="product.html?id=${productos[i].id}">VER DETALLE</a>
                </article>
                `
        }
    })
    .catch(function (error) {
        console.log(error)
    })

fetch("https://dummyjson.com/products/category/womens-watches")
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        let productos = data.products          

        for (let i = 0; i < productos.length; i++) {
            contenedor1.innerHTML += `
                <article>
                    <img class="foto" src="${productos[i].thumbnail}" alt="foto1">
                    <h2>${productos[i].title}</h2>
                    <p class="desc">${productos[i].description}</p>
                    <h3>$${productos[i].price}</h3>
                    <a class="vermas" href="product.html?id=${productos[i].id}">VER DETALLE</a>
                </article>
                `
        }
    })
    .catch(function (error) {
        console.log(error)
    })


//traer las categorias a la barra de navegacion de la api
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