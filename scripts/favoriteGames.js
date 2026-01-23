import { isFavorite } from "../data/favorites.js";
import { games, loadGames } from "../data/gamesData.js";
import { renderGamesGrid } from "./games.js";


await loadGames();

const favoriteGames = games.filter((game) => isFavorite(game.id));
renderGamesGrid(favoriteGames);

