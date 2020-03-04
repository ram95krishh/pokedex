/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';

import './DisplayScreen.css';

class DisplayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      attack, defense, openEditWidget,
      img, name, type: types = [], additionalFields = [],
    } = this.props;
    if (!attack) return null;
    const typeChips = types.map(type => (
      <div key={type} styleName={`baseTypeChip ${type.toLowerCase()}TypeChip`}>
        {type}
      </div>
    ));
    return (
      <div styleName="displayScreen">
        <div onClick={openEditWidget} onKeyDown={openEditWidget} role="button" styleName="editIconArea">
          <div styleName="iconBorder">
            Add stats
            <EditIcon styleName="editIcon" />
          </div>
        </div>
        <img
          alt="info"
          src={img}
          styleName="displayImage"
        />
        <div styleName="description">
          <div styleName="infoArea">
            <div>
              {`Name: ${name}`}
            </div>
            <div>
              {`Attack: ${attack}`}
            </div>
            <div>
              {`Defense: ${defense}`}
            </div>
            <div styleName="type">
              Type(s):
            </div>
            <div styleName="typeInfo">
              {typeChips}
            </div>
          </div>
          {additionalFields.length ? (
            <div>
              <h3>Additional Fields</h3>
              {additionalFields.map(field => (
                <div styleName="fields">
                  <div>
                    {field.name}
                  </div>
                  <div>
                    -
                  </div>
                  <div>
                    {field.value}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

DisplayScreen.defaultProps = {
  additionalFields: [],
};

DisplayScreen.propTypes = {
  additionalFields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  openEditWidget: PropTypes.func.isRequired,
  type: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DisplayScreen;
