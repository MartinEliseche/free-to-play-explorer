import { games, loadGames } from "../data/gamesData.js";


await loadGames();
renderGamesGrid();

function renderGamesGrid() {
  let gamesGridHTML = "";

  games.forEach((game) => {
    gamesGridHTML += `
      <div class="game-card js-game-card" data-game-id="${game.id}">
        <img src="${game.thumbnail}" alt="${game.title}" loading="lazy">
        <div class="game-info">
          <span class="game-genre">${game.genre}</span>
          <h3>${game.title}</h3>
          <p class="game-description">
            ${game.short_description}
          </p>
        </div>
      </div>
    `;
  });

  document.querySelector(".js-games-grid").innerHTML = gamesGridHTML;
  
  document.querySelectorAll(".js-game-card").forEach((gameCard) => {
    gameCard.addEventListener("click", () => {
      const { gameId } = gameCard.dataset;
      console.log("clickeaste el juego de id: ", gameId);

      window.location.href = `/pages/details.html?id=${gameId}`;
    });
  });
}