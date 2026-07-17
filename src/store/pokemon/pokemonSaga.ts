import { type PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPokemonList } from '../../services/pokemonService';
import {
  searchPokemonFailure,
  searchPokemonRequest,
  searchPokemonSuccess,
} from './pokemonSlice';
import type { Pokemon, SearchPokemonPayload } from './types';

function* handleSearchPokemon(action: PayloadAction<SearchPokemonPayload>) {
  try {
    const results: Pokemon[] = yield call(fetchPokemonList, action.payload);
    yield put(searchPokemonSuccess({ query: action.payload.query, results }));
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch pokemon';
    yield put(searchPokemonFailure(message));
  }
}

export default function* pokemonSaga() {
  yield takeEvery(searchPokemonRequest.type, handleSearchPokemon);
}
