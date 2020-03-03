import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/AddCircleRounded';

import './EditPokemon.css';

const range = (start, stop, step) => Array.from({
  length: (stop - start) / step + 1,
}, (_, i) => start + (i * step));

class AddPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newStats: {},
      fieldCount: 1,
      disabled: true,
    };

    this.editPokemon = this.editPokemon.bind(this);
    this.canUpdatePokemon = this.canUpdatePokemon.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.addFieldCount = this.addFieldCount.bind(this);
  }

  canUpdatePokemon() {
    const { newStats, fieldCount } = this.state;
    return range(0, fieldCount - 1, 1).reduce((acc, i) => acc
      || !(newStats[i].name && !!newStats[i].name.length)
      || !(newStats[i].value && !!newStats[i].value.length), false);
  }

  handleFieldChange(event, value, index) {
    const { newStats } = this.state;
    if (!newStats[index]) {
      const field = {
        name: event.target.value,
      };
      newStats[index] = field;
    } else {
      newStats[index].name = event.target.value;
    }
    const disabled = this.canUpdatePokemon();
    this.setState({ newStats, disabled });
  }

  handleValueChange(event, value, index) {
    const { newStats } = this.state;
    if (!newStats[index]) {
      const field = {
        value: event.target.value,
      };
      newStats[index] = field;
    } else {
      newStats[index].value = event.target.value;
    }
    const disabled = this.canUpdatePokemon();
    this.setState({ newStats, disabled });
  }

  otherErrors() {
    const {
      attack, defense,
      name,
    } = this.state;
    return attack < 10 || attack > 100 || defense < 10 || defense > 100 || !name.length;
  }

  addFieldCount() {
    const { fieldCount } = this.state;
    this.setState({ fieldCount: fieldCount + 1 });
  }

  editPokemon() {
    const { newStats, fieldCount } = this.state;
    const { id } = this.props;
    const { editPokemon, handleClose } = this.props;
    const newFields = range(0, fieldCount - 1, 1).map(i => newStats[i]);
    const payload = {
      id,
      newFields: newFields.filter(field => field.name.trim() && field.value.trim()),
    };
    editPokemon(payload);
    handleClose();
  }

  render() {
    const { disabled, newStats, fieldCount } = this.state;
    const { name, img } = this.props;
    return (
      <div styleName="editPokemon">
        <div styleName="header">
          <div styleName="avatarBorder">
            <img alt={name} src={img} styleName="avatar" />
          </div>
          <h3>{name}</h3>
        </div>
        {
          [...Array(fieldCount)].map((e, index) => (
            <div styleName="additionalFields">
              <div styleName="additionalField">
                <TextField
                  autoComplete="off"
                  label="Field Name"
                  onChange={(ev, v) => this.handleFieldChange(ev, v, index)}
                  styleName="nameField"
                  value={newStats[index] && newStats[index].name}
                />
              </div>
              <div styleName="additionalField">
                <TextField
                  InputProps={{
                    inputProps: {
                      max: 100, min: 10,
                    },
                  }}
                  label="Value"
                  onChange={(ev, val) => this.handleValueChange(ev, val, index)}
                  styleName="valueField"
                  value={newStats[index] && newStats[index].value}
                />
              </div>
              {index === fieldCount - 1 && fieldCount < 3 ? (
                <div styleName="additionalField">
                  Add more
                  <AddIcon onClick={this.addFieldCount} />
                </div>
              ) : null}
              {index === fieldCount - 1 && fieldCount > 2 ? (
                <div styleName="additionalFieldError">
                  (Max Reached)
                </div>
              ) : null}
            </div>
          ))
        }
        <div styleName="buttonArea">
          <Button
            color="primary"
            disabled={disabled}
            onClick={this.editPokemon}
            styleName="updateButton"
            variant="contained"
          >
            Update
          </Button>
        </div>
      </div>
    );
  }
}

AddPokemon.propTypes = {
  editPokemon: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default AddPokemon;
