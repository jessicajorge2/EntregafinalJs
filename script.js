document.addEventListener('DOMContentLoaded', function () {
    cargarProductos(productos);
    const filter = document.getElementById('categoria');
});

const cart = [];

function cargarProductos(productos) {
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    productos.forEach(producto => {
        const productoHTML = `
            <div class="producto" data-categoria="${producto.categoria}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="nombre-producto">${producto.nombre}</div>
                <div class="precio">${producto.precio}</div>
                <button onclick="addToCart('${producto.nombre}', ${parseFloat(producto.precio.slice(1))})">Agregar al Carrito</button>
            </div>
        `;
        catalogo.innerHTML += productoHTML;
    });
}

function addToCart(productId, productName, productPrice) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        
        cartItem.quantity++;
    } else {
       
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

  
    updateCart();
}

function realizarCompra() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
  
    const total = parseFloat(cartTotal.textContent);
  
    if (total > 0) {
      alert(`Compra realizada. Total: $${total.toFixed(2)}`);
      
      clearCart();
    } else {
      alert("Ingresa con tu usuario y termina la compra");
    }
}


function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - Cantidad: ${item.quantity}`;
        cartItems.appendChild(listItem);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}
function clearCart() {
    cart.length = 0;
    updateCart();
}


function filtrarProductos() {
    const categoriaSeleccionada = document.getElementById("categoria").value;

    const productosFiltrados = (categoriaSeleccionada === "todos") ?
        productos :
        productos.filter(producto => producto.categoria === categoriaSeleccionada);

    cargarProductos(productosFiltrados);
}


const productos = [
    { id: 1, nombre: "Vestido", categoria: "conjuntos", precio: "$2899", imagen: "imagenes/ropa 1.jpg" },
    { id: 2, nombre: "Short", categoria: "pantalones", precio: "$1999", imagen: "imagenes/ropa 2.png" },
    { id: 3, nombre: "Remeras", categoria: "remeras", precio: "$1999", imagen: "imagenes/ropa 3.png" },
    { id: 4, nombre: "Pijama", categoria: "conjuntos", precio: "$4099", imagen: "imagenes/ropa 4.png" },
    { id: 5, nombre: "Remera & Pantalon", categoria: "conjuntos", precio: "$4599", imagen: "imagenes/ropa 5.png" },
    { id: 6, nombre: "Ajuar Bebe", categoria: "bebes", precio: "$3699", imagen: "imagenes/ropa 6.png" },
    { id: 7, nombre: "Remera & Pollera", categoria: "conjuntos", precio: "$4899", imagen: "imagenes/ropa 7.png" },
    { id: 8, nombre: "Vestido", categoria: "conjuntos", precio: "$3999", imagen: "imagenes/ropa 8.png" },
    { id: 9, nombre: "Camisa & Pantalon", categoria: "conjuntos", precio: "$4899", imagen: "imagenes/ropa 9.png" },

];

