import {
  getPokemonsAction,
  openAddWidgetAction,
  closeAddWidgetAction,
  addPokemonAction,
  editPokemonAction,
  openEditWidgetAction,
  closeEditWidgetAction,
  openTruncateWidgetAction,
  closeTruncateWidgetAction,
  truncatePokemonsAction,
} from './actions';

const getPokemonsTrigger = dispatch => () => dispatch(getPokemonsAction());

const openAddWidget = dispatch => () => dispatch(openAddWidgetAction());

const closeAddWidget = dispatch => () => dispatch(closeAddWidgetAction());

const addPokemon = dispatch => payload => dispatch(addPokemonAction(payload));

const editPokemon = dispatch => payload => dispatch(editPokemonAction(payload));

const openEditWidget = dispatch => () => dispatch(openEditWidgetAction());

const closeEditWidget = dispatch => () => dispatch(closeEditWidgetAction());

const openTruncateWidget = dispatch => () => dispatch(openTruncateWidgetAction());

const closeTruncateWidget = dispatch => () => dispatch(closeTruncateWidgetAction());

const truncatePokemons = dispatch => () => dispatch(truncatePokemonsAction());

const operations = {
  getPokemonsTrigger,
  openAddWidget,
  closeAddWidget,
  addPokemon,
  editPokemon,
  openEditWidget,
  closeEditWidget,
  openTruncateWidget,
  closeTruncateWidget,
  truncatePokemons,
};

export default operations;
