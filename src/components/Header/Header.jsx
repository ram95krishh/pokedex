import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import './Header.css';

const Header = ({ openAddWidget, openTruncateWidget }) => (
  <div styleName="headerArea">
    <Button
      color="secondary"
      onClick={openAddWidget}
      startIcon={<AddIcon />}
      variant="contained"
    >
      Add Pokemon
    </Button>
    <h1 styleName="title">Pokedex</h1>
    <Button
      color="secondary"
      onClick={openTruncateWidget}
      startIcon={<DeleteIcon />}
      variant="contained"
    >
      Truncate
    </Button>
  </div>
);

Header.propTypes = {
  openAddWidget: PropTypes.func.isRequired,
  openTruncateWidget: PropTypes.func.isRequired,
};

export default Header;
