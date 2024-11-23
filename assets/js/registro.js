document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenemos lo datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    // Creamos el objeto del usuario
    const usuario = {
        nombre,
        apellido,
        email,
        password,
        gender
    };

    // Guardamos el usuario en LocalStorage
    localStorage.setItem(email, JSON.stringify(usuario));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'login.html';
});
