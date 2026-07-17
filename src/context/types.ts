export type PokemonListScreenStrings = {
  title: string;
  searchPlaceholder: string;
  emptyState: string;
  errorTitle: string;
  errorRetry: string;
  favoritesAction: string;
};

export type PokemonDetailScreenStrings = {
  overviewLabel: string;
  typesLabel: string;
  statsLabel: string;
  addFavorite: string;
  removeFavorite: string;
  loadingDetails: string;
  detailsError: string;
};

export type FavoritesScreenStrings = {
  title: string;
  emptyState: string;
};

export type Strings = {
  pokedexPlugin: {
    common: {
      appTitle: string;
    };
    screens: {
      pokemonList: PokemonListScreenStrings;
      pokemonDetail: PokemonDetailScreenStrings;
      favorites: FavoritesScreenStrings;
    };
  };
};
