import {
  takeEvery,
  all,
  put,
} from 'redux-saga/effects';
import {
  GET_POKEMONS_SAGA,
  SET_POKEMONS,
} from './types';
// import * as Api from '../../../lib/Api';
// import notyNotification from '../../../lib/Noty';
import { iconBaseUrl, pokedex } from '../../../utils/constants';

function* getPokemons() {
  const pokemons = pokedex.slice(0, 151).map(pokemon => Object.assign({},
    { img: `${iconBaseUrl}${pokemon.id}.png` },
    pokemon));
  yield put({ type: SET_POKEMONS, payload: pokemons });
}

function* watchPokemonsFetch() {
  yield takeEvery(GET_POKEMONS_SAGA, getPokemons);
}

export const TestExports = {
  getPokemons,
};

// eslint-disable-next-line
export function* combinedSaga() {
  yield all([
    watchPokemonsFetch(),
  ]);
}
