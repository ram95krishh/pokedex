import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SplashScreen from './SplashScreen/SplashScreen';
import Pokedex from '../containers/Pokedex';
import { operations as feedOperations } from '../state/ducks/feed';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { splashScreen: true };
  }

  componentDidMount() {
    const { getPokemons } = this.props;
    getPokemons();
    setTimeout(() => {
      this.setState({ splashScreen: false });
    }, 1000);
  }

  render() {
    const { splashScreen } = this.state;
    return (
      <div styleName="screenArea">
        {splashScreen ? <SplashScreen /> : <Pokedex />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPokemons: feedOperations.getPokemonsTrigger(dispatch),
});

Home.propTypes = {
  getPokemons: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
