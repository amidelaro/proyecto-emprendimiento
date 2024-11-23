window.addEventListener('DOMContentLoaded', () => {
    const userInfo = document.getElementById('user-info');
    const loggedInUserEmail = localStorage.getItem('loggedInUser');

    if (loggedInUserEmail) {
        const user = JSON.parse(localStorage.getItem(loggedInUserEmail));
        userInfo.innerHTML = `
            <span>Hola, ${user.nombre}</span> | 
            <a href="#" id="logout">Cerrar Sesión</a>
        `;

        document.getElementById('logout').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            alert('Sesión cerrada.');
            window.location.href = 'login.html';
        });
    }
});
