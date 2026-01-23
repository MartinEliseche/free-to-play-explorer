export let favoriteGamesIDs = JSON.parse(localStorage.getItem("favoriteGamesIDs")) || [];

export function addFavoriteGame(gameId) {
  const gameIdNumber = Number(gameId);

  if (!favoriteGamesIDs.includes(gameIdNumber)) {
    favoriteGamesIDs.push(gameIdNumber);
    saveToStorage();
  }
}

export function removeFavoriteGame(gameId) {
  const gameIdNumber = Number(gameId);
  favoriteGamesIDs = favoriteGamesIDs.filter(id => id !== gameIdNumber);
  saveToStorage();
}

export function isFavorite(gameId) {
  const gameIdNumber = Number(gameId);
  return favoriteGamesIDs.includes(gameIdNumber);
}

function saveToStorage() {
  localStorage.setItem("favoriteGamesIDs", JSON.stringify(favoriteGamesIDs));
}