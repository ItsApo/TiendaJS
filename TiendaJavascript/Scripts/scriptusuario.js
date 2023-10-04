// Definimos un array para almacenar los productos disponibles
let productosDisponibles = [];

// Definimos un array para almacenar los productos en el carrito
let carrito = [];

// Función para mostrar los productos disponibles en la lista
function mostrarProductosDisponibles() {
  const listaProductos = document.getElementById("lista-productos");
  listaProductos.innerHTML = "";

  productosDisponibles.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `Código: ${producto.codigo} | Nombre: ${producto.nombre} | Precio: $${producto.precio} | Disponibilidad: ${
      producto.disponibilidad ? "Disponible" : "No disponible"
    }`;

    // Botón de Añadir al Carrito
    const btnAgregarCarrito = document.createElement("button");
    btnAgregarCarrito.textContent = "Añadir al Carrito";
    btnAgregarCarrito.addEventListener("click", () => {
      agregarAlCarrito(producto);
    });
    item.appendChild(btnAgregarCarrito);

    listaProductos.appendChild(item);
  });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  mostrarCarrito();
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  const listaCarrito = document.getElementById("carrito");
  listaCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `Código: ${producto.codigo} | Nombre: ${producto.nombre} | Precio: $${producto.precio}`;
    
    // Botón de Eliminar del Carrito
    const btnEliminarCarrito = document.createElement("button");
    btnEliminarCarrito.textContent = "Eliminar del Carrito";
    btnEliminarCarrito.addEventListener("click", () => {
      eliminarDelCarrito(producto);
    });
    item.appendChild(btnEliminarCarrito);

    listaCarrito.appendChild(item);
  });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
  carrito = carrito.filter((p) => p !== producto);
  mostrarCarrito();
}

// Evento para cargar los productos disponibles al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  productosDisponibles = JSON.parse(localStorage.getItem("productos"));
  mostrarProductosDisponibles();
});
