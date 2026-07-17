import type { Strings } from './types';

export const defaultStrings: Strings = {
  pokedexPlugin: {
    common: {
      appTitle: 'Pokedex',
    },
    screens: {
      pokemonList: {
        title: 'Pokedex',
        searchPlaceholder: 'Search pokemon…',
        emptyState: 'No pokemon match that search.',
        errorTitle: 'Something went wrong.',
        errorRetry: 'Tap to retry',
        favoritesAction: 'Favorites',
      },
      pokemonDetail: {
        overviewLabel: 'Overview',
        typesLabel: 'Types',
        statsLabel: 'Base stats',
        addFavorite: 'Add to favorites',
        removeFavorite: 'Remove from favorites',
        loadingDetails: 'Loading details…',
        detailsError: 'Could not load details.',
      },
      favorites: {
        title: 'Favorites',
        emptyState: 'You haven’t favorited anything yet.',
      },
    },
  },
};
