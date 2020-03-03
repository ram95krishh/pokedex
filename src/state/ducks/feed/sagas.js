import {
  takeEvery,
  all,
  put,
  putResolve,
  select,
} from 'redux-saga/effects';

import {
  ADD_POKEMON_SAGA,
  GET_POKEMONS_SAGA,
  SET_POKEMONS,
  ADD_POKEMON,
  EDIT_POKEMON_SAGA,
  EDIT_POKEMON,
} from './types';
import selectors from './selectors';
import notyNotification from '../../../lib/Noty';
import { iconBaseUrl, pokedex } from '../../../utils/constants';

function* getPokemons() {
  const pokemons = pokedex.slice(0, 151).map(pokemon => Object.assign({},
    { img: `${iconBaseUrl}${pokemon.id}.png` },
    pokemon));
  yield put({ type: SET_POKEMONS, payload: pokemons });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function* addPokemon({ payload }) {
  try {
    const pokemons = yield select(selectors.getPokemons);
    const newId = pokemons.length + 1;
    const pokemon = {
      img: `${iconBaseUrl}${newId}.png`,
      id: newId,
      name: {
        english: capitalizeFirstLetter(payload.name),
      },
      base: {
        Attack: payload.attack,
        Defense: payload.defense,
      },
      type: payload.type,
    };
    yield putResolve({ type: ADD_POKEMON, payload: pokemon });
    notyNotification('Success', 'Pokemon added successfully', 'success');
  } catch (e) {
    notyNotification('Oops', 'Sorry, Something went wrong!', 'error');
  }
}

function* editPokemon({ payload }) {
  try {
    yield putResolve({ type: EDIT_POKEMON, payload });
    notyNotification('Success', 'Pokemon updated successfully', 'success');
  } catch (e) {
    notyNotification('Oops', 'Sorry, Something went wrong!', 'error');
  }
}

function* watchPokemonsFetch() {
  yield takeEvery(GET_POKEMONS_SAGA, getPokemons);
}

function* watchAddPokemon() {
  yield takeEvery(ADD_POKEMON_SAGA, addPokemon);
}

function* watchEditPokemon() {
  yield takeEvery(EDIT_POKEMON_SAGA, editPokemon);
}

export const TestExports = {
  getPokemons,
};

// eslint-disable-next-line
export function* combinedSaga() {
  yield all([
    watchPokemonsFetch(),
    watchAddPokemon(),
    watchEditPokemon(),
  ]);
}
