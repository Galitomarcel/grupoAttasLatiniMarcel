let formheader = document.querySelector(".formbusqueda")
let inputheader = document.querySelector(".busqueda")
let mensajeerror = document.querySelector("#mensajeerror")

let contenedor = document.querySelector(".masvendidos") //productos articul
let contenedor1 = document.querySelector(".masvendidos1") //productos articul

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
    .then(function (res) {
        return res.json()
    })
    .then(function (datos) {
        let productos = datos.products          // ← esto es lo que recorrés

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
    .then(function (res) {
        return res.json()
    })
    .then(function (datos) {
        let productos = datos.products          // ← esto es lo que recorrés

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