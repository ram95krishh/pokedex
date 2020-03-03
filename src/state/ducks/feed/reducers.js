import {
  ADD_POKEMON,
  SET_POKEMONS,
  EDIT_POKEMON,
  TRUNCATE_POKEMONS,
} from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }

    case ADD_POKEMON: {
      return {
        ...state,
        pokemons: [...state.pokemons, action.payload],
      };
    }

    case TRUNCATE_POKEMONS: {
      const pokemons = state.pokemons.asMutable().splice(0, 151);
      return {
        ...state,
        pokemons,
      };
    }

    case EDIT_POKEMON: {
      const { pokemons } = state;
      const pokemonToBeUpdated = pokemons[action.payload.id - 1];
      const updatedPokemon = pokemonToBeUpdated.set('additionalFields', action.payload.newFields);
      const updatedPokemons = pokemons.set(action.payload.id - 1, updatedPokemon);
      return {
        ...state,
        pokemons: updatedPokemons,
      };
    }

    default:
      return state;
  }
};

export default reducer;
