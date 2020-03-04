import {
  getPokemonsAction,
  addPokemonAction,
  editPokemonAction,
  truncatePokemonsAction,
} from './actions';

import notyNotification from '../../../lib/Noty';

const getPokemonsTrigger = dispatch => () => dispatch(getPokemonsAction());

const addPokemon = dispatch => payload => dispatch(addPokemonAction(payload));

const editPokemon = dispatch => payload => dispatch(editPokemonAction(payload));

const truncatePokemons = dispatch => () => {
  dispatch(truncatePokemonsAction());
  notyNotification('Success', 'Truncated pokemons!!', 'success');
};

const operations = {
  getPokemonsTrigger,
  addPokemon,
  editPokemon,
  truncatePokemons,
};

export default operations;
