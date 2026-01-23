import { loadGames, getGameById } from "../data/gamesData.js";

const url = new URL(window.location.href);
const gameId = Number(url.searchParams.get("id"));

await loadGames();

const gameData = getGameById(gameId);
renderGameDetails();

function renderGameDetails() {
  const gameDatilsHTML = `
    <div class="detail-layout">
      <section class="detail-main">
        <img src="${gameData.thumbnail}" alt="${gameData.title}">
        <div class="game-description-full">
          <h2 style="margin-top: 1.5rem">Descripción</h2>
          <p style="color: var(--text-dim); line-height: 1.6;">
            ${gameData.short_description}
          </p>
        </div>
      </section>

      <aside class="detail-sidebar">
        <h2>${gameData.title}</h2>
      
      <div class="info-item">
        <label>Género</label>
        <p>${gameData.genre}</p>
      </div>

      <div class="info-item">
        <label>Plataforma</label>
        <p>${gameData.platform}</p>
      </div>

      <div class="info-item">
        <label>Desarrollador</label>
        <p>${gameData.developer}</p>
      </div>

      <div class="info-item">
        <label>Editor</label>
        <p>${gameData.publisher}</p>
      </div>

      <div class="info-item">
        <label>Fecha de lanzamiento</label>
        <p>${gameData.release_date}</p>
      </div>

      <a href="${gameData.game_url}" target="_blank" class="btn-play" style="display: block; text-align: center; background: var(--accent); color: var(--bg-color); padding: 1rem; border-radius: 8px; text-decoration: none; font-weight: bold; margin-top: 1rem;">
        PLAY NOW
      </a>
    </aside>
  </div>
  `;

  document.querySelector(".js-detail-container").innerHTML = gameDatilsHTML;
}


