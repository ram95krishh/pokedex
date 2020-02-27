import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
// import Icon from '@material-ui/core/Icon';

import './PokeList.css';

const PokeList = ({ pokemons, onItemClick }) => {
  const icons = pokemons.map((pokemon, index) => {
    const { name, id } = pokemon;
    return (
      <div onClick={() => onItemClick(index)} onKeyDown={onItemClick} role="button" styleName="pokeIcon" tabIndex={index}>
        <div styleName="iconNo">
          <Badge badgeContent={`#${id}`} color="secondary" size="small" />
        </div>
        <img alt={`#${pokemon.id}`} src={pokemon.img} styleName="icons" />
        <div>{name.english}</div>
      </div>
    );
  });
  return (
    <div styleName="pokelist">
      {icons}
    </div>
  );
};

PokeList.defaultProps = {
  pokemons: [],
};

PokeList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
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

export default PokeList;
