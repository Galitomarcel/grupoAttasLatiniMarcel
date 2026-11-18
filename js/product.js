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
                    <a href="category.html?categoria=${categorias[i]}">${categorias[i]}</a>
                </li>
                `
        }
    })
    .catch(function (error) {
        console.log(error)
    })

    //


let nombre = document.querySelector("#nombre")
let marca = document.querySelector(".marca")
let categoria = document.querySelector("#categoria")
let precio = document.querySelector(".precioo")
let foto = document.querySelector(".principal")
let descripcion = document.querySelector("#descripcion")
let stock = document.querySelector(".stock")
let tags = document.querySelector("#tags")
let conreviews = document.querySelector(".rev")
let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
let fotodeta1 = document.querySelector(".detalle1")
let fotodeta2 = document.querySelector(".detalle2")
let fotodeta3 = document.querySelector(".detalle3")

fetch("https://dummyjson.com/products/" + id)
.then (function(response) {
   return response.json()
})
.then (function(data) {
    console.log(data)
   foto.src = data.thumbnail
   fotodeta1.src = data.images[0]
   fotodeta2.src = data.images[1]
   fotodeta3.src = data.images[2]
   nombre.innerText = data.title
   marca.innerText = "Marca: " + data.brand
   categoria.innerHTML = `Categoría: <a href="./category.html?categoria=${data.category}">${data.category}</a>`
   precio.innerText = "Precio: $" + data.price
   descripcion.innerText = data.description
   stock.innerText = "Stock: " + data.stock + " unidades disponibles"
   for (let i = 0; i<data.tags.length && i<3; i++) {
    tags.innerHTML = `<li> # ${data.tags[i]} </li>`
   }
   let reviews = data.reviews
   for (let i = 0; i<reviews.length; i++) {
    conreviews.innerHTML += ` <article> <h3>${reviews[i].rating} ★</h3>
      <p>${reviews[i].comment}</p> <p>${reviews[i].reviewerName}</p> <p>${reviews[i].date}</p> </article>`
   }
})
.catch (function(error) {
   console.log(error)
})
