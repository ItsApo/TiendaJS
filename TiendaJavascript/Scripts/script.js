// En el archivo script.js

// Obtener el botón de inicio de sesión por su id
const btnIniciarSesion = document.getElementById("btnIniciarSesion");

// Agregar un evento de clic al botón de inicio de sesión
btnIniciarSesion.addEventListener("click", iniciarSesion);

// Función de inicio de sesión
function iniciarSesion() {
  // Obtener los valores de usuario y contraseña
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;

  // Verificar si el usuario y contraseña son correctos
  if (usuario === "admin" && contrasena === "1234") {
    // Redirigir al usuario a la página correspondiente (por ejemplo, admin.html)
    window.location.href = "admin.html";
  } else if (usuario === "usuario" && contrasena === "1234") {
    // Redirigir al usuario a la página correspondiente (por ejemplo, usuario.html)
    window.location.href = "usuario.html";
  } else {
    alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
  }
}






