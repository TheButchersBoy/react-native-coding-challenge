import { all, fork } from 'redux-saga/effects';
import pokemonSaga from './pokemon/pokemonSaga';

export default function* rootSaga() {
  yield all([fork(pokemonSaga)]);
}
