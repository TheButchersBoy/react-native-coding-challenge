export const ROUTE_NAMES = {
  POKEMON_LIST: 'PokemonList',
  POKEMON_DETAIL: 'PokemonDetail',
  FAVORITES: 'Favorites',
} as const;

export type RouteName = typeof ROUTE_NAMES[keyof typeof ROUTE_NAMES];
