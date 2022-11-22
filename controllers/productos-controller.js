import { productoService } from "../servicios/productos-servicio.js";

const nuevoProducto = (name, price, imageUrl, alt, section) => {
    const card = document.createElement("div");
    const contenido = `
    <div>
    <img src="${imageUrl}" alt="">
        <h2>${alt}</h2>    
        <h3>${name}<h3>
        <h3>${section}</h3>
        <p>${price}</p>
    </div> `

    card.innerHTML = contenido;
    card.classList.add("card")
    return card;
}

const producto = document.querySelector("[datos-productos]");

const render = async () => {
    try {
        const listaProductos = await productoService.listaProductos()
        listaProductos.forEach(elemento => {
            producto.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl, elemento.alt, elemento.section))
        });
    }
    catch (erro) {
        console.log(erro);
    }
}

render();