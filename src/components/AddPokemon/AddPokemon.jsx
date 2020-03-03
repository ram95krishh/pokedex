import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { pokeTypes } from '../../utils/constants';
import './AddPokemon.css';

class AddPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attack: 10,
      attackError: false,
      defense: 10,
      defenseError: false,
      name: '',
      nameError: false,
      typeError: false,
      disabled: true,
      types: [],
    };

    this.addPokemon = this.addPokemon.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTypesChange = this.handleTypesChange.bind(this);
  }

  handleChange(event) {
    let {
      attackError, defenseError,
      nameError,
    } = this.state;
    const { types } = this.state;
    this.setState({ [event.target.name]: event.target.value });
    if (event.target.name === 'attack') {
      if (event.target.value < 10 || event.target.value > 100) {
        attackError = true;
      } else {
        attackError = false;
      }
    }
    if (event.target.name === 'defense') {
      if (event.target.value < 10 || event.target.value > 100) {
        defenseError = true;
      } else {
        defenseError = false;
      }
    }
    if (event.target.name === 'name') {
      if (event.target.value.length) {
        nameError = false;
      } else {
        nameError = true;
      }
    }
    this.setState({
      attackError,
      defenseError,
      nameError,
      disabled: false || !types.length,
    });
  }

  otherErrors() {
    const {
      attack, defense,
      name,
    } = this.state;
    return attack < 10 || attack > 100 || defense < 10 || defense > 100 || !name.length;
  }

  handleTypesChange(event, index) {
    const types = [...Object.values(index || {})] || [];
    this.setState({
      types,
    });
    if (!types.length) {
      this.setState({ typeError: true });
    } else {
      this.setState({ typeError: false, disabled: false || this.otherErrors() });
    }
  }

  addPokemon() {
    const { addPokemon, handleClose } = this.props;
    const {
      attack,
      defense,
      name,
      types: type,
    } = this.state;
    const pokemon = {
      name,
      type,
      attack,
      defense,
    };
    handleClose();
    addPokemon(pokemon);
  }

  render() {
    const {
      attack, attackError, defense, defenseError,
      name, nameError, types, typeError, disabled: initialState,
    } = this.state;
    const disabled = attackError || defenseError || nameError || typeError || initialState;

    return (
      <div styleName="addPokemon">
        <TextField
          autoComplete="off"
          error={nameError}
          helperText={nameError ? 'This field can\'t be empty' : ''}
          label="Name"
          name="name"
          onChange={this.handleChange}
          value={name}
        />
        <TextField
          error={attackError}
          helperText={attackError ? 'Min 10 ... Max 100' : ''}
          InputProps={{
            inputProps: {
              max: 100, min: 10,
            },
          }}
          label="Attack"
          name="attack"
          onChange={this.handleChange}
          type="number"
          value={attack}
        />
        <TextField
          error={defenseError}
          helperText={defenseError ? 'Min 10 ... Max 100' : ''}
          InputProps={{
            inputProps: {
              max: 100, min: 10,
            },
          }}
          label="Defense"
          name="defense"
          onChange={this.handleChange}
          type="number"
          value={defense}
        />
        <Autocomplete
          getOptionLabel={option => option}
          multiple
          name="type"
          onChange={this.handleTypesChange}
          options={pokeTypes}
          renderInput={params => (
            <TextField
              {...params}
              error={typeError}
              helperText={typeError ? 'Select a minimum of one Type!' : ''}
              label="Type(s)"
              name="type"
              variant="standard"
            />
          )}
          value={types}
        />
        <div styleName="buttonArea">
          <Button
            color="primary"
            disabled={disabled}
            onClick={this.addPokemon}
            styleName="addButton"
            variant="contained"
          >
            Add
          </Button>
        </div>
      </div>
    );
  }
}

AddPokemon.propTypes = {
  addPokemon: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AddPokemon;
