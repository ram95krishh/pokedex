import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';

import DisplayScreen from '../../components/DisplayScreen';
import PokeList from '../../components/PokeList';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(index) {
    this.setState({ selected: index });
  }

  render() {
    const { selected } = this.state;
    const { pokemons } = this.props;
    const pokemonSelected = pokemons[selected] || {};
    const {
      base: { Attack: attack, Defense: defense },
      img, type = [],
    } = pokemonSelected;
    const name = pathOr('', ['name', 'english'], pokemonSelected);

    return (
      <div>
        <DisplayScreen
          attack={attack}
          defense={defense}
          img={img}
          name={name}
          type={type}
        />
        <PokeList onItemClick={this.changeSelected} pokemons={pokemons} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemons: state.feed.pokemons,
});

Pokedex.defaultProps = {
  pokemons: [],
};

Pokedex.propTypes = {
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

export default connect(mapStateToProps, null)(Pokedex);
