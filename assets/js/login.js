document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenemos los datos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obtenemos el usuario del LocalStorage
    const usuario = JSON.parse(localStorage.getItem(email));

    // Validación del usuario
    if (usuario && usuario.password === password) {
        alert(`¡Bienvenido, ${usuario.nombre}!`);
        localStorage.setItem('loggedInUser', email);
        window.location.href = 'index.html';
    } else {
        alert('Correo o contraseña incorrectos.');
    }
});
