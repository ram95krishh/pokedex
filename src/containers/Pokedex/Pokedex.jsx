import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import AddPokemon from '../../components/AddPokemon';
import EditPokemon from '../../components/EditPokemon';
import TruncateWidget from '../../components/TruncateWidget';

import DisplayScreen from '../../components/DisplayScreen';
import PokeList from '../../components/PokeList';
import CustomDialog from '../../components/CustomDialogBox';
import { operations as feedOpeations, selectors as feedSelectors } from '../../state/ducks/feed';
import { operations as widgetsOperations, selectors as widgetsSelectors } from '../../state/ducks/widgets';

import './Pokedex.css';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.changeSelected = this.changeSelected.bind(this);
    this.handleTruncate = this.handleTruncate.bind(this);
  }

  changeSelected(index) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(index)) {
      this.setState({ selected: index });
    }
  }

  handleTruncate() {
    const { truncatePokemons } = this.props;
    const { selected } = this.state;
    if (selected > 150) {
      this.setState({ selected: 0 });
    }
    truncatePokemons();
  }

  render() {
    const { selected } = this.state;
    const {
      addPokemon,
      addWidget,
      editPokemon,
      editWidget,
      pokemons,
      openAddWidget,
      closeAddWidget,
      openEditWidget,
      closeEditWidget,
      openTruncateWidget,
      closeTruncateWidget,
      truncateWidget,
    } = this.props;
    const pokemonSelected = pokemons[selected] || {};
    const {
      img, type = [],
    } = pokemonSelected;
    const { additionalFields, base = {}, id } = pokemonSelected;
    const { Attack: attack, Defense: defense } = base;
    const name = pathOr('', ['name', 'english'], pokemonSelected);

    return (
      <div styleName="pokedex">
        <Header openAddWidget={openAddWidget} openTruncateWidget={openTruncateWidget} />
        <div styleName="searchButton">
          <Link to="/search">
            <Button
              color="secondary"
              startIcon={<SearchIcon />}
              variant="contained"
            >
              Search pokemons
            </Button>
          </Link>
        </div>
        <DisplayScreen
          additionalFields={additionalFields}
          attack={attack}
          defense={defense}
          img={img}
          name={name}
          openEditWidget={openEditWidget}
          type={type}
        />
        <PokeList onItemClick={this.changeSelected} pokemons={pokemons} />
        <CustomDialog
          component={(
            <AddPokemon addPokemon={addPokemon} handleClose={closeAddWidget} />
          )}
          handleClose={closeAddWidget}
          open={addWidget}
          title="Add Pokemon"
        />
        <CustomDialog
          component={(
            <EditPokemon
              editPokemon={editPokemon}
              handleClose={closeEditWidget}
              id={id}
              img={img}
              name={name}
            />
          )}
          handleClose={closeEditWidget}
          open={editWidget}
          title="Add new stats"
        />
        <CustomDialog
          component={(
            <TruncateWidget
              handleClose={closeTruncateWidget}
              truncatePokemons={this.handleTruncate}
            />
          )}
          handleClose={closeTruncateWidget}
          open={truncateWidget}
          title="ACTION REQUIRED!"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addWidget: widgetsSelectors.getAddWidgetState(state),
  editWidget: widgetsSelectors.getEditWidgetState(state),
  pokemons: feedSelectors.getPokemons(state),
  truncateWidget: widgetsSelectors.getTruncateWidgetState(state),
});

const mapDispatchToProps = dispatch => ({
  addPokemon: feedOpeations.addPokemon(dispatch),
  closeTruncateWidget: widgetsOperations.closeTruncateWidget(dispatch),
  editPokemon: feedOpeations.editPokemon(dispatch),
  openAddWidget: widgetsOperations.openAddWidget(dispatch),
  closeAddWidget: widgetsOperations.closeAddWidget(dispatch),
  openEditWidget: widgetsOperations.openEditWidget(dispatch),
  closeEditWidget: widgetsOperations.closeEditWidget(dispatch),
  openTruncateWidget: widgetsOperations.openTruncateWidget(dispatch),
  truncatePokemons: feedOpeations.truncatePokemons(dispatch),
});

Pokedex.defaultProps = {
  pokemons: [],
  addWidget: false,
  editWidget: false,
  truncateWidget: false,
};

Pokedex.propTypes = {
  addPokemon: PropTypes.func.isRequired,
  addWidget: PropTypes.bool,
  closeAddWidget: PropTypes.func.isRequired,
  closeEditWidget: PropTypes.func.isRequired,
  closeTruncateWidget: PropTypes.func.isRequired,
  editPokemon: PropTypes.func.isRequired,
  editWidget: PropTypes.bool,
  openAddWidget: PropTypes.func.isRequired,
  openEditWidget: PropTypes.func.isRequired,
  openTruncateWidget: PropTypes.func.isRequired,
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
  truncatePokemons: PropTypes.func.isRequired,
  truncateWidget: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
