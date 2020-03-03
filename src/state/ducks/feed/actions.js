import {
  GET_POKEMONS_SAGA,
  OPEN_ADD_WIDGET,
  CLOSE_ADD_WIDGET,
  ADD_POKEMON_SAGA,
  OPEN_EDIT_WIDGET,
  CLOSE_EDIT_WIDGET,
  EDIT_POKEMON_SAGA,
  OPEN_TRUNCATE_WIDGET,
  CLOSE_TRUNCATE_WIDGET,
  TRUNCATE_POKEMONS,
} from './types';

const getPokemonsAction = () => ({
  type: GET_POKEMONS_SAGA,
});

const openAddWidgetAction = () => ({
  type: OPEN_ADD_WIDGET,
});

const closeAddWidgetAction = () => ({
  type: CLOSE_ADD_WIDGET,
});

const addPokemonAction = payload => ({
  type: ADD_POKEMON_SAGA,
  payload,
});

const openEditWidgetAction = () => ({
  type: OPEN_EDIT_WIDGET,
});

const closeEditWidgetAction = () => ({
  type: CLOSE_EDIT_WIDGET,
});

const openTruncateWidgetAction = () => ({
  type: OPEN_TRUNCATE_WIDGET,
});

const closeTruncateWidgetAction = () => ({
  type: CLOSE_TRUNCATE_WIDGET,
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
  openAddWidgetAction,
  closeAddWidgetAction,
  addPokemonAction,
  openEditWidgetAction,
  closeEditWidgetAction,
  editPokemonAction,
  openTruncateWidgetAction,
  closeTruncateWidgetAction,
  truncatePokemonsAction,
};
