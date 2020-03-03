import { pathOr } from 'ramda';

const getPokemons = state => pathOr([], ['feed', 'pokemons'], state);

const getAddWidgetState = state => pathOr(false, ['feed', 'openAddWidget'], state);

const getEditWidgetState = state => pathOr(false, ['feed', 'openEditWidget'], state);

const getTruncateWidgetState = state => pathOr(false, ['feed', 'openTruncateWidget'], state);

const selectors = {
  getPokemons,
  getAddWidgetState,
  getEditWidgetState,
  getTruncateWidgetState,
};

export default selectors;
