const BASE_URL = "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api";

class Game {
  id;
  title;
  developer;
  genre;
  platform;
  publisher;
  release_date;
  short_description;
  thumbnail;
  game_url;

  constructor(gameDatails) {
    this.id = gameDatails.id;
    this.title = gameDatails.title;
    this.developer = gameDatails.developer;
    this.genre = gameDatails.genre;
    this.platform = gameDatails.platform;
    this.publisher = gameDatails.publisher;
    this.release_date = gameDatails.release_date;
    this.short_description = gameDatails.short_description;
    this.thumbnail = gameDatails.thumbnail;
    this.game_url = gameDatails.game_url;
  }
}

export let games = [];


export async function loadGames() {
  try {
    const response = await fetch(`${BASE_URL}/games`);
    const gamesData = await response.json();

    games = gamesData.map((gameData) => {
      return new Game(gameData);
    });
  }

  catch (err) {
    console.log(err);
  }
}


export function getGameById(gameId) {
  let matchingGame;

  games.forEach((game) => {
    if (game.id === gameId) {
      matchingGame = game;
    }
  });

  return matchingGame;
};

