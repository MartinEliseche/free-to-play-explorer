# 🎮 Free-to-Play Explorer

¡Bienvenido! Este es un proyecto personal desarrollado para explorar el consumo de APIs externas y la manipulación dinámica del DOM utilizando JavaScript Vanilla. La idea es simple: navegar a través de una biblioteca de juegos gratuitos, buscarlos por título, guardarlos en favoritos y ver sus especificaciones técnicas.

## ⚠️ NOTA IMPORTANTE: Acceso a la API (CORS)
Para que el proyecto funcione correctamente en el entorno local o producción, es necesario activar el acceso temporal al proxy. La API de FreeToGame no permite peticiones directas desde el navegador por políticas de CORS.

1. Visita: [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)
2. Haz clic en el botón **"Request temporary access to the demo server"**.
3. Una vez activado, refresca la aplicación y los datos se cargarán correctamente.

## 🚀 Características
- **Listado Dinámico:** Renderizado de juegos mediante la API de [FreeToGame](https://www.freetogame.com/api-doc).
- **Buscador en tiempo real:** Filtrado de juegos por título.
- **Sistema de Favoritos:** Persistencia de datos utilizando `localStorage`.
- **Navegación de Detalles:** Vista dedicada por juego mediante parámetros de URL (`URLSearchParams`).
- **Dark Mode UI:** Interfaz moderna diseñada con CSS Grid y Flexbox.
- **POO:** Modelado de datos de videojuegos mediante Clases de JavaScript.

## 🛠️ Tecnologías
- **HTML5** & **CSS3** (Custom Properties & Responsive Design)
- **JavaScript (ES6+)** - Módulos, Async/Await y Fetch API
- **Google Fonts** (Inter)

## 📂 Estructura del Proyecto
```text
FREE-TO-PLAY-EXPLORER/
├── data/               # Modelos y lógica de datos (gamesData.js, favorites.js)
├── pages/              # Vistas HTML (index.html, details.html, favorites.html)
├── scripts/            # Lógica de renderizado y eventos (games.js, gameDetails.js)
├── styles/             # Hojas de estilo CSS (style.css)
├── index.html          # Punto de entrada (Redirección)
└── README.md          (pequeño cambio 2)