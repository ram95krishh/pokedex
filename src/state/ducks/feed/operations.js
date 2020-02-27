import {
  getPokemonsAction,
} from './actions';

const getPokemonsTrigger = dispatch => () => dispatch(getPokemonsAction());

const enrolEventTrigger = dispatch => payload => dispatch(getPokemonsAction(payload));

const operations = {
  enrolEventTrigger,
  getPokemonsTrigger,
};

export default operations;
