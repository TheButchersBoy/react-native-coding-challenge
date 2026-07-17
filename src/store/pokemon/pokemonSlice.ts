import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';
import type {
  Pokemon,
  PokemonState,
  SearchPokemonPayload,
  SearchPokemonSuccessPayload,
} from './types';

const initialState: PokemonState = {
  list: {
    data: [],
    loading: false,
    error: null,
    query: '',
  },
  favorites: [],
  details: {
    byId: {},
    loadingId: null,
    error: null,
  },
};

const pokemonSlice = createSlice({
  initialState,
  name: 'pokemon',
  reducers: {
    searchPokemonRequest(state, action: PayloadAction<SearchPokemonPayload>) {
      state.list.loading = true;
      state.list.error = null;
      state.list.query = action.payload.query;
    },
    searchPokemonSuccess(state, action: PayloadAction<SearchPokemonSuccessPayload>) {
      state.list.loading = false;
      state.list.data = action.payload.results;
    },
    searchPokemonFailure(state, action: PayloadAction<string>) {
      state.list.loading = false;
      state.list.error = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const id = action.payload;
      const index = state.favorites.indexOf(id);
      if (index > 0) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(id);
      }
    },
  },
});

export const {
  searchPokemonRequest,
  searchPokemonSuccess,
  searchPokemonFailure,
  toggleFavorite,
} = pokemonSlice.actions;

export const getPokemonList = (state: RootState) => state.pokemon.list;
export const getFavoriteIds = (state: RootState) => state.pokemon.favorites;

export const getPokemonById = (id: number) => (state: RootState): Pokemon | undefined =>
  state.pokemon.list.data.find(p => p.id === id);

export default pokemonSlice.reducer;
