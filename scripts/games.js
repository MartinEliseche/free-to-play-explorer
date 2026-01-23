import { games, loadGames, getGamesByTitle } from "../data/gamesData.js";
import { favoriteGamesIDs, isFavorite, addFavoriteGame, removeFavoriteGame } from "../data/favorites.js";

await Promise.all([
  loadGames()
]).then(() => {
  renderGamesGrid();
  initSearch();
});


export function renderGamesGrid(gameList = games) {
  let gamesGridHTML = "";

  gameList.forEach((game) => {
    const favClass = isFavorite(game.id) ? "is-fav" : "";

    gamesGridHTML += `
      <div class="game-card js-game-card" data-game-id="${game.id}">
        <button class="js-fav-btn fav-btn ${favClass}" data-game-id="${game.id}">
          ❤
        </button>
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

  goToGameDetails();
  renderFavoriteGames();
}


export function initSearch() {
  const searchBtn = document.querySelector(".js-search-btn");
  const searchInput = document.querySelector(".js-search-input");
  const cleanBtn = document.querySelector(".js-clean-btn");

  if (searchBtn) {
    searchBtn.addEventListener("click", () => searchGame());
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", (event) => isEnterKey(event));
  }

  if (cleanBtn) {
    cleanBtn.addEventListener("click", () => clearSearchInput());
  }
}


function searchGame() {
  const gameTitle = document.querySelector(".js-search-input").value.toLowerCase();
  document.querySelector(".js-clean-btn").classList.add("display");

  const filteredGames = getGamesByTitle(gameTitle);

  if (filteredGames.length > 0) {
    renderGamesGrid(filteredGames);
  }

  else {
    document.querySelector(".js-games-grid").innerHTML = `
      <p class="error-msg">No se encontraron juegos con "${gameTitle}"</p>
    `;
  }
}


function isEnterKey(event) {
  if (event.key === "Enter") {
    searchGame();
  }
}


function clearSearchInput() {
  document.querySelector(".js-search-input").value = "";
  renderGamesGrid(games);

  document.querySelector(".js-clean-btn").classList.remove("display");
}


function goToGameDetails() {
  document.querySelectorAll(".js-game-card").forEach((gameCard) => {
    gameCard.addEventListener("click", () => {
      const { gameId } = gameCard.dataset;
      window.location.href = `/pages/details.html?id=${gameId}`;
    });
  });
}


function renderFavoriteGames() {
  document.querySelectorAll(".js-fav-btn").forEach((gameHeart) => {
    gameHeart.addEventListener("click", (event) => {
      const { gameId } = gameHeart.dataset;
      event.stopPropagation();

      if (!isFavorite(gameId)) {
        addFavoriteGame(gameId);
        gameHeart.classList.add("is-fav");
      }

      else {
        removeFavoriteGame(gameId);
        gameHeart.classList.remove("is-fav");
      }

    });
  });
}

