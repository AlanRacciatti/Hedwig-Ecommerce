const form = document.getElementById("form-edit-product");

const precio = document.getElementById("precioNuevoProd");
const precioValidation = document.getElementById("precioValidation");

const oferta = document.getElementById("ofertaNuevoProd");
const ofertaValidation = document.getElementById("ofertaValidation");

const titulo = document.getElementById("tituloNuevoProd");
const tituloValidation = document.getElementById("tituloValidation");

const descripcion = document.getElementById("descripcionNuevoProd");
const descripcionValidation = document.getElementById("descripcionValidation");

const genero = document.getElementById("generoNuevoProd");
const generoValidation = document.getElementById("generoValidation");

const autor = document.getElementById("autor");
const autorValidation = document.getElementById("autorValidation");

const cantPags = document.getElementById("cantPagsNuevoProd");
const cantPagsValidation = document.getElementById("pagsValidation");

const editorial = document.getElementById("editorialNuevoProd");
const editorialValidation = document.getElementById("editorialValidation");

const stock = document.getElementById("stockNuevoProd");
const stockValidation = document.getElementById("stockValidation");

window.addEventListener('load', function() {
    
    precio.addEventListener('blur', function(e){
        if(precio.value>0){
            precioValidation.classList.add("d-none");
            precio.classList.remove("border");
            precio.classList.remove("border-danger");
        }else{
            precioValidation.classList.remove("d-none")
            precio.classList.add("border")
            precio.classList.add("border-danger")
        };
    });

    oferta.addEventListener('blur', function(e){
        if(oferta.value>=0 && oferta.value<=100 && oferta.value!=""){
            ofertaValidation.classList.add("d-none");
            oferta.classList.remove("border");
            oferta.classList.remove("border-danger");
        }else{
            ofertaValidation.classList.remove("d-none")
            oferta.classList.add("border")
            oferta.classList.add("border-danger")
        };
    });

    titulo.addEventListener('blur', function(e){
        if(titulo.value!=""){
            tituloValidation.classList.add("d-none");
            titulo.classList.remove("border");
            titulo.classList.remove("border-danger");
        }else{
            tituloValidation.classList.remove("d-none")
            titulo.classList.add("border")
            titulo.classList.add("border-danger")
        };
    });

    descripcion.addEventListener('blur', function(e){
        if(descripcion.value!=""){
            descripcionValidation.classList.add("d-none");
            descripcion.classList.remove("border");
            descripcion.classList.remove("border-danger");
        }else{
            descripcionValidation.classList.remove("d-none")
            descripcion.classList.add("border")
            descripcion.classList.add("border-danger")
        };
    });

    genero.addEventListener('blur', function(e){
        if(genero.value!=0){
            generoValidation.classList.add("d-none");
            genero.classList.remove("border");
            genero.classList.remove("border-danger");
        }else{
            generoValidation.classList.remove("d-none")
            genero.classList.add("border")
            genero.classList.add("border-danger")
        };
    });

    autor.addEventListener('blur', function(e){
        if(autor.value!=0){
            autorValidation.classList.add("d-none");
            autor.classList.remove("border");
            autor.classList.remove("border-danger");
        }else{
            autorValidation.classList.remove("d-none")
            autor.classList.add("border")
            autor.classList.add("border-danger")
        };
    });

    cantPags.addEventListener('blur', function(e){
        if(cantPags.value>0 ){
            cantPagsValidation.classList.add("d-none");
            cantPags.classList.remove("border");
            cantPags.classList.remove("border-danger");
        }else{
            cantPagsValidation.classList.remove("d-none")
            cantPags.classList.add("border")
            cantPags.classList.add("border-danger")
        };
    });

    editorial.addEventListener('blur', function(e){
        if(editorial.value!=""){
            editorialValidation.classList.add("d-none");
            editorial.classList.remove("border");
            editorial.classList.remove("border-danger");
        }else{
            editorialValidation.classList.remove("d-none")
            editorial.classList.add("border")
            editorial.classList.add("border-danger")
        };
    });

    stock.addEventListener('blur', function(e){
        if(stock.value>0){
            stockValidation.classList.add("d-none");
            stock.classList.remove("border");
            stock.classList.remove("border-danger");
        }else{
            stockValidation.classList.remove("d-none")
            stock.classList.add("border")
            stock.classList.add("border-danger")
        };
    });
})
