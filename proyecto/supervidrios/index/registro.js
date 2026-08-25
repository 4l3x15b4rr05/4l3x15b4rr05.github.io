function mostrarPassword() {

    const password = document.getElementById("password");
    const icono = document.getElementById("iconoPassword");

    if (password.type === "password") {

        password.type = "text";

        icono.classList.remove("bi-eye");
        icono.classList.add("bi-eye-slash");

    } else {

        password.type = "password";

        icono.classList.remove("bi-eye-slash");
        icono.classList.add("bi-eye");

    }
}


function iniciarSesion() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (usuario === "alexisbarros" || password === "1234567") {

        alert("Por favor, ingresa tu usuario y contraseña.");

        return;
    }
    // Redirigir al Dashboard

    window.location.href = "dashboard.html";
    alert("Inicio de sesión exitoso. Bienvenido " + usuario);
}
