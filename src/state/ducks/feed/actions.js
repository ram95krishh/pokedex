import {
  GET_POKEMONS_SAGA,
  ADD_POKEMON_SAGA,
  EDIT_POKEMON_SAGA,
  TRUNCATE_POKEMONS,
} from './types';

const getPokemonsAction = () => ({
  type: GET_POKEMONS_SAGA,
});

const addPokemonAction = payload => ({
  type: ADD_POKEMON_SAGA,
  payload,
});

const editPokemonAction = payload => ({
  type: EDIT_POKEMON_SAGA,
  payload,
});

const truncatePokemonsAction = () => ({
  type: TRUNCATE_POKEMONS,
});

export {
  getPokemonsAction,
  addPokemonAction,
  editPokemonAction,
  truncatePokemonsAction,
};
