/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';

import { operations as feedOperations, selectors as feedSelectors } from '../../state/ducks/feed';
import DisplayScreen from '../../components/DisplayScreen';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const { getPokemons, pokemons = [] } = this.props;
    if (!pokemons.length) {
      getPokemons();
    }
  }

  handleSelect(e, pokemon = {}) {
    if (!isNaN(pokemon.id)) {
      this.setState({ selected: pokemon.id - 1 });
    }
  }

  render() {
    const { pokemons = [] } = this.props;
    const { selected } = this.state;
    const filterOptions = pokemons.map(pokemon => ({
      id: pokemon.id,
      type: pokemon.type,
      name: pokemon.name.english,
    }));
    const pokemonSelected = !isNaN(selected) ? (pokemons[selected] || {}) : {};
    const {
      img, type = [],
    } = pokemonSelected;
    const { base = {} } = pokemonSelected;
    const { Attack: attack, Defense: defense } = base;
    const name = pathOr('', ['name', 'english'], pokemonSelected);

    if (!pokemons.length) return <div>Loading</div>;
    return (
      <div styleName="searchScreen">
        <h1 styleName="header"> Pokedex </h1>
        <div styleName="searchArea">
          <div styleName="autoCompleteArea">
            <Autocomplete
              autoComplete
              autoSelect
              getOptionLabel={pokemon => pokemon.name}
              id="name"
              name="search"
              onChange={this.handleSelect}
              options={filterOptions}
              renderInput={params => (
                <TextField
                  {...params}
                  helperText="Search your pokemon by NAME or TYPE here.."
                  label="Search"
                  name="search"
                  variant="standard"
                />
              )}
              styleName="autoComplete"
            />
          </div>
        </div>
        {selected && !isNaN(selected)
          ? (
            <DisplayScreen
              attack={attack}
              defense={defense}
              img={img}
              name={name}
              type={type}
            />
          ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: feedSelectors.getPokemons(state),
});

const mapDispatchToProps = dispatch => ({
  getPokemons: feedOperations.getPokemonsTrigger(dispatch),
});

Search.defaultProps = {
  pokemons: [],
};

Search.propTypes = {
  getPokemons: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      base: PropTypes.shape({
        Attack: PropTypes.number,
        Defence: PropTypes.number,
        HP: PropTypes.number,
        'Sp. Attack': PropTypes.number,
        'Sp. Defence': PropTypes.number,
        Speed: PropTypes.number,
      }),
      id: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.shape({
        chinese: PropTypes.string,
        english: PropTypes.string,
        japanese: PropTypes.string,
      }),
      type: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
