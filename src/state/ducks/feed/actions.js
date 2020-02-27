import {
  GET_POKEMONS,
  GET_POKEMONS_SAGA,
} from './types';

const getPokemonsAction = () => ({
  type: GET_POKEMONS_SAGA,
});

const closeSnackBarAction = () => ({
  type: GET_POKEMONS,
});

export {
  getPokemonsAction,
  closeSnackBarAction,
};
