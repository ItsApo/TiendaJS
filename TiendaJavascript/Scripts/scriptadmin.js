let productos = [];

// Función para mostrar los productos en la lista
function mostrarProductos() {
  const listaProductos = document.getElementById("lista-productos");
  listaProductos.innerHTML = "";

  productos.forEach((producto) => {
    const item = document.createElement("li");
    item.textContent = `Código: ${producto.codigo} | Nombre: ${producto.nombre} | Precio: $${producto.precio} | Disponibilidad: ${
      producto.disponibilidad ? "Disponible" : "No disponible"
    } | Promoción: ${producto.promocion ? "Sí" : "No"}`;

    // Botón de Editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => {
      editarProducto(producto);
    });
    item.appendChild(btnEditar);

    // Botón de Borrar
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.addEventListener("click", () => {
      borrarProducto(producto);
    });
    item.appendChild(btnBorrar);

    listaProductos.appendChild(item);
  });
}

// Función para agregar un producto
function agregarProducto() {
  const codigo = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const precio = parseFloat(document.getElementById("precio").value);
  const disponibilidad = document.getElementById("disponibilidad").checked;
  const promocion = document.getElementById("promocion").checked;

  const producto = {
    codigo,
    nombre,
    precio,
    disponibilidad,
    promocion,
  };

  productos.push(producto);
  mostrarProductos();
  guardarProductosEnLocalStorage();
}

// Función para guardar los productos en el LocalStorage
function guardarProductosEnLocalStorage() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

// Función para cargar los productos desde el LocalStorage al cargar la página
function cargarProductosDesdeLocalStorage() {
  const productosGuardados = localStorage.getItem("productos");
  if (productosGuardados) {
    productos = JSON.parse(productosGuardados);
  }
}

// Función para editar un producto
function editarProducto(producto) {
  document.getElementById("form-editar-producto").style.display = "block";

  document.getElementById("editar-codigo").value = producto.codigo;
  document.getElementById("editar-nombre").value = producto.nombre;
  document.getElementById("editar-precio").value = producto.precio;
  document.getElementById("editar-disponibilidad").checked = producto.disponibilidad;
  document.getElementById("editar-promocion").checked = producto.promocion;

  // Función para guardar la edición
  document.getElementById("btn-guardar-edicion").addEventListener("click", () => {
    producto.codigo = document.getElementById("editar-codigo").value;
    producto.nombre = document.getElementById("editar-nombre").value;
    producto.precio = parseFloat(document.getElementById("editar-precio").value);
    producto.disponibilidad = document.getElementById("editar-disponibilidad").checked;
    producto.promocion = document.getElementById("editar-promocion").checked;

    mostrarProductos();
    cancelarEdicion();
  });

  // Función para cancelar la edición
  document.getElementById("btn-cancelar-edicion").addEventListener("click", () => {
    cancelarEdicion();
  });
}

function cancelarEdicion() {
  document.getElementById("form-editar-producto").style.display = "none";
}

// Función para borrar un producto
function borrarProducto(producto) {
  productos = productos.filter((p) => p !== producto);
  mostrarProductos();
  guardarProductosEnLocalStorage();
}

// Evento para agregar un producto al hacer click en el botón
document.getElementById("btn-agregar-producto").addEventListener("click", () => {
  agregarProducto();
});

// Mostramos los productos iniciales (si los hay)
cargarProductosDesdeLocalStorage();
mostrarProductos();