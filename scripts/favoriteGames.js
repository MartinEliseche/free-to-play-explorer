import { favoriteGamesIDs, isFavorite } from "../data/favorites.js";
import { getGameById, loadGames } from "../data/gamesData.js";

await loadGames();

let favoriteGames = [];

favoriteGamesIDs.forEach((gameId) => {
  const game = getGameById(gameId);
  favoriteGames.push(game);
});

renderFavorites();


function renderFavorites() {
  let favoritesHTML = "";

  favoriteGames.forEach((game) => {
    const favClass = isFavorite(game.id) ? "is-fav" : "";

    favoritesHTML += `
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

    document.querySelector(".js-favs-games-grid").innerHTML = favoritesHTML;
  });

}