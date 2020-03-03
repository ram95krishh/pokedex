import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

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
  }

  changeSelected(index) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(index)) {
      this.setState({ selected: index });
    }
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
      truncatePokemons,
    } = this.props;
    const pokemonSelected = pokemons[selected] || {};
    const {
      img, type = [],
    } = pokemonSelected;
    const { additionalFields, base = {}, id } = pokemonSelected;
    const { Attack: attack, Defense: defense } = base;
    const name = pathOr('', ['name', 'english'], pokemonSelected);

    return (
      <div>
        <h1 styleName="title">Pokedex</h1>
        <div onClick={openAddWidget} onKeyDown={openAddWidget} role="button" styleName="addIconArea" tabIndex={0}>
          <div styleName="iconBorder">
            Add Pokemon
            {'    '}
            <AddIcon styleName="addIcon" />
          </div>
        </div>
        <div onClick={openTruncateWidget} onKeyDown={openTruncateWidget} role="button" styleName="deleteIconArea" tabIndex={0}>
          <div styleName="iconBorder">
            Truncate
            {'    '}
            <DeleteIcon styleName="deleteIcon" />
          </div>
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
              truncatePokemons={truncatePokemons}
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
