import {
  ADD_POKEMON,
  SET_POKEMONS,
  OPEN_ADD_WIDGET,
  CLOSE_ADD_WIDGET,
  OPEN_EDIT_WIDGET,
  CLOSE_EDIT_WIDGET,
  EDIT_POKEMON,
  OPEN_TRUNCATE_WIDGET,
  CLOSE_TRUNCATE_WIDGET,
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

    case OPEN_ADD_WIDGET: {
      return {
        ...state,
        openAddWidget: true,
      };
    }

    case CLOSE_ADD_WIDGET: {
      return {
        ...state,
        openAddWidget: false,
      };
    }

    case OPEN_EDIT_WIDGET: {
      return {
        ...state,
        openEditWidget: true,
      };
    }

    case CLOSE_EDIT_WIDGET: {
      return {
        ...state,
        openEditWidget: false,
      };
    }

    case OPEN_TRUNCATE_WIDGET: {
      return {
        ...state,
        openTruncateWidget: true,
      };
    }

    case CLOSE_TRUNCATE_WIDGET: {
      return {
        ...state,
        openTruncateWidget: false,
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
