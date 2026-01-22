import { games, loadGames, getGamesByTitle } from "../data/gamesData.js";

document.querySelector(".js-search-btn").addEventListener("click", () => {
  searchGame();
});

await loadGames();
renderGamesGrid();


function renderGamesGrid(gameList = games) {
  let gamesGridHTML = "";

  gameList.forEach((game) => {
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


function searchGame() {
  const gameTitle = document.querySelector(".js-search-input").value.toLowerCase();

  const filteredGames = getGamesByTitle(gameTitle);
  console.log(filteredGames)

  if (filteredGames.length > 0) {
    renderGamesGrid(filteredGames);
  } 
  
  else {
    document.querySelector(".js-games-grid").innerHTML = `
      <p class="error-msg">No se encontraron juegos con "${gameTitle}"</p>
    `;
  }
}