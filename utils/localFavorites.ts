const toggleFavorites = (id: number) => {
  let favorites = getFavorites();
  if (favorites.includes(id))
    favorites = favorites.filter((pokeId) => pokeId !== id);
  else favorites.push(id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window == "undefined") return false;
  let favorites: number[] = getFavorites();
  return favorites.includes(id);
};

const getFavorites = (): number[] => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites;
};

export default { toggleFavorites, existInFavorites, getFavorites };
