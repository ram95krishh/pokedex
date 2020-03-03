import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './TruncateWidget.css';

const TruncateWidget = ({ truncatePokemons, handleClose }) => (
  <div styleName="truncateWidget">
    <h3>This action will truncate all the pokemons after #151</h3>
    <Button
      color="secondary"
      onClick={() => { truncatePokemons(); handleClose(); }}
      styleName="confirmButton"
      variant="contained"
    >
      Confirm
    </Button>
  </div>
);

TruncateWidget.propTypes = {
  handleClose: PropTypes.func.isRequired,
  truncatePokemons: PropTypes.func.isRequired,
};

export default TruncateWidget;
