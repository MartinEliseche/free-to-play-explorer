import { favoriteGamesIDs, isFavorite, removeFavoriteGame } from "../data/favorites.js";
import { getGameById, loadGames } from "../data/gamesData.js";
import { renderGamesGrid } from "./games.js";


await loadGames();

let favoriteGames = [];

favoriteGamesIDs.forEach((gameId) => {
  const game = getGameById(gameId);
  favoriteGames.push(game);
});

renderGamesGrid(favoriteGames);

