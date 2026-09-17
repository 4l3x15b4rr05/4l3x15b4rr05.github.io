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

    const usuario = document.getElementById("usuario").value.trim();
    const password = document.getElementById("password").value;

    // Validar campos vacíos
    if (usuario === "" || password === "") {

        alert("Por favor, ingresa tu usuario y contraseña.");

        return;
    }

    // Validar usuario y contraseña
    if (usuario !== "alexisbarros" || password !== "1234567") {

        alert("Usuario o contraseña incorrectos.");

        return;
    }

    // Inicio de sesión exitoso
    alert("Inicio de sesión exitoso. Bienvenido " + usuario);

    // Redirigir al Dashboard
    window.location.href = "../dashboard/dashboard.html";
}
