import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DisplayScreen.css';

class DisplayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      attack, defense,
      img, name, type: types = [],
    } = this.props;
    const typeChips = types.map(type => (
      <div styleName={`${type.toLowerCase()}TypeChip`}>
        {type}
      </div>
    ));
    return (
      <div styleName="displayScreen">
        <img
          alt="info"
          src={img}
          styleName="displayImage"
        />
        <div styleName="infoArea">
          <div>
            {`Name: ${name}`}
          </div>
          <div>
            {`Attack: ${attack}`}
          </div>
          <div>
            {`Defence: ${defense}`}
          </div>
          <div>
            Type(s):
          </div>
          <div styleName="typeInfo">
            {typeChips}
          </div>
        </div>
      </div>
    );
  }
}

DisplayScreen.propTypes = {
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DisplayScreen;
