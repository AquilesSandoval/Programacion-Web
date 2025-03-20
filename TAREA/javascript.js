// Datos de los jugadores
const players = [
    {
        nombre: "Erling",
        apellido: "Haaland",
        dorsal: 9,
        nacionalidad: "Noruega",
        goles: 28,
        asistencias: 6,
        minutos: 2340,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/12/Haaland-PNG-Manchester-City-Football-Render-7.png"
    },
    {
        nombre: "Jude",
        apellido: "Bellingham",
        dorsal: 5,
        nacionalidad: "Inglaterra",
        goles: 20,
        asistencias: 8,
        minutos: 2520,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/02/Jude-Bellingham-PNG-Madrid-Football-Render-Sport-Renders.png"
    },
    {
        nombre: "Kylian",
        apellido: "Mbappé",
        dorsal: 7,
        nacionalidad: "Francia",
        goles: 32,
        asistencias: 12,
        minutos: 2700,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/09/Mbappe-PNG-Real-Madrid-Football-Render-5.png"
    },
    {
        nombre: "Vinícius",
        apellido: "Jr",
        dorsal: 7,
        nacionalidad: "Brasil",
        goles: 15,
        asistencias: 14,
        minutos: 2160,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/12/Vinicius-PNG-Real-Madrid-Footbal-Render-8.png"
    },
    {
        nombre: "Harry",
        apellido: "Kane",
        dorsal: 9,
        nacionalidad: "Inglaterra",
        goles: 30,
        asistencias: 8,
        minutos: 2610,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/08/Harry-Kane-PNG-Bayern-Munich-Football-Render-3.png"
    },
    {
        nombre: "Robert",
        apellido: "Lewandowski",
        dorsal: 9,
        nacionalidad: "Polonia",
        goles: 18,
        asistencias: 6,
        minutos: 2430,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/09/Robert-Lewandowski-PNG-Barcelona-Football-Render-3.png"
    },
    {
        nombre: "Mohamed",
        apellido: "Salah",
        dorsal: 11,
        nacionalidad: "Egipto",
        goles: 21,
        asistencias: 9,
        minutos: 2520,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2023/07/Mo-Salah-Image-PNG-Render-Liverpool-Sport-Renders.png"
    },
    {
        nombre: "Lautaro",
        apellido: "Martínez",
        dorsal: 10,
        nacionalidad: "Argentina",
        goles: 23,
        asistencias: 4,
        minutos: 2340,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/02/Lautaro-Martinez-Inter-Render-Football-PNG-Image-sport-Renders.png"
    },
    {
        nombre: "Rodrygo",
        apellido: "Goes",
        dorsal: 11,
        nacionalidad: "Brasil",
        goles: 12,
        asistencias: 7,
        minutos: 2250,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/04/Rodrygo-PNG-Real-Madrid-Football-Render.png"
    },
    {
        nombre: "Bruno",
        apellido: "Fernandes",
        dorsal: 8,
        nacionalidad: "Portugal",
        goles: 8,
        asistencias: 13,
        minutos: 2700,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/12/Bruno-Fernandes-PNG-United-Football-Render-2.png"
    },
    {
        nombre: "Phil",
        apellido: "Foden",
        dorsal: 47,
        nacionalidad: "Inglaterra",
        goles: 16,
        asistencias: 10,
        minutos: 2340,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/06/Foden-PNG-City-Football-Render.png"
    },
    {
        nombre: "Pedri",
        apellido: "Gonzales",
        dorsal: 8,
        nacionalidad: "Español",
        goles: 4,
        asistencias: 3,
        minutos: 1980,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/01/Pedri-PNG-Barcelona-Render-Football-Sport-Renders.png"
    },
    {
        nombre: "Lamine",
        apellido: "Yamal",
        dorsal: 19,
        nacionalidad: "Español",
        goles: 15,
        asistencias: 17,
        minutos: 1890,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2025/03/Lamine-Yamal-PNG-Barcelona-Football-Render-11.png"
    },
    {
        nombre: "Rafael",
        apellido: "Leão",
        dorsal: 10,
        nacionalidad: "Portugal",
        goles: 12,
        asistencias: 8,
        minutos: 2160,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/02/Rafa-Leao-PNG-Football-Render-Milan-Sport-Renders.png"
    },
    {
        nombre: "Alexander",
        apellido: "Isak",
        dorsal: 9,
        nacionalidad: "Suecia",
        goles: 18,
        asistencias: 7,
        minutos: 2340,
        leyenda: false,
        imagen: "https://sportrenders.com/wp-content/uploads/2024/01/Alexander-Isak-PNG-Newcastle-Football-Render-Sport-Renders.png"
    },
    {
        nombre: "Lionel",
        apellido: "Messi",
        dorsal: 10,
        nacionalidad: "Argentina",
        goles: 35,
        asistencias: 8,
        minutos: 2160,
        leyenda: true,
        imagen: "https://sportrenders.com/wp-content/uploads/2023/11/Messi-Render-Argentina-PNG-Imagen-Football-Sport-Renders-895x1024.png"
    },
    {
        nombre: "Cristiano Ronaldo",
        apellido: "Dos Santos Aveiro",
        dorsal: 7,
        nacionalidad: "Portugal",
        goles: 80,
        asistencias: 50,
        minutos: 2430,
        leyenda: true,
        imagen: "ronaldo.png"
    }, 
    {
        nombre: "Neymar",
        apellido: "da Silva Santos Júnior",
        dorsal: 10,
        nacionalidad: "Brasil",
        goles: 18,
        asistencias: 8,
        minutos: 2160,
        leyenda: true,
        imagen: "https://sportrenders.com/wp-content/uploads/2023/10/Neymar-PNG-Brasil-Seleccion-Imagen-Sport-Render.png"
    },
];



// Función para formatear minutos en horas y minutos
function formatMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}


// Función para crear una tarjeta de jugador
function createPlayerCard(player) {
    return `
        <div class="player-card">
            <img src="${player.imagen}" alt="${player.nombre} ${player.apellido}" class="player-image">
            <div class="player-info">
                <h2 class="player-name">${player.nombre} ${player.apellido}</h2>
                <span class="player-number">#${player.dorsal} · ${player.nacionalidad}</span>
                <div class="player-stats">
                    <div class="stat">
                        <div class="stat-value">${player.goles}</div>
                        <div class="stat-label">Goles</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${player.asistencias}</div>
                        <div class="stat-label">Asistencias</div>
                    </div>
                    <div class="stat">
                        <div class="stat-value">${formatMinutes(player.minutos)}</div>
                        <div class="stat-label">Tiempo Jugado</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
function renderPlayers(isLeyendas) {
    const playersGrid = document.getElementById('players-grid');
    const filteredPlayers = players.filter(player => player.leyenda === isLeyendas);
    playersGrid.innerHTML = filteredPlayers.map(player => createPlayerCard(player)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const playersGrid = document.getElementById('players-grid');
    const leyendasButton = document.querySelector('.toggle-button');
    const toggleText = document.querySelector('.toggle-text');
    let showingLeyendas = false;

    // Render initial players (not leyendas)
    renderPlayers(showingLeyendas);

    leyendasButton.addEventListener('click', () => {
        showingLeyendas = !showingLeyendas;
        renderPlayers(showingLeyendas);
        leyendasButton.classList.toggle('active', showingLeyendas);
        toggleText.textContent = showingLeyendas ? 'Leyendas' : 'Actuales';
    });

    // Set initial text
    toggleText.textContent = 'Actuales';
});