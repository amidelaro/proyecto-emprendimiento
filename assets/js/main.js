// Ejecutar cuando se cargue la página
window.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.getElementById('user-info'); // Contenedor del usuario
    const loggedInUserEmail = localStorage.getItem('loggedInUser'); // Revisar si hay sesión activa

    if (loggedInUserEmail) {
        // Obtener datos del usuario desde localStorage
        const usuario = JSON.parse(localStorage.getItem(loggedInUserEmail));
        // Actualizar el menú con el nombre del usuario y la opción de cerrar sesión
        userInfo.innerHTML = `
            <span>Hola, ${usuario.nombre}</span> | 
            <a href="#" id="logout">Cerrar Sesión</a>
        `;

        // Evento para cerrar sesión
        document.getElementById('logout').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser'); // Eliminar sesión activa
            alert('Has cerrado sesión.');
            window.location.href = 'login.html'; // Redirigir al login
        });
    }
});

// Selecciona el botón del menú y los enlaces
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Agregar evento al botón para alternar la visibilidad del menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Añade o quita la clase 'show'
});
