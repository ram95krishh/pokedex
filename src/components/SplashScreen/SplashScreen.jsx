import React from 'react';
import Lottie from 'react-lottie';

import './SplashScreen.css';
import pokeball from './pokeball.json';

const defaultOptions = {
  animationData: pokeball,
  loop: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const SplashScreen = () => (
  <>
    <div styleName="titleArea">
      <h1 styleName="title">
        POKEDEX
      </h1>
    </div>
    <div>
      <Lottie
        height={400}
        options={defaultOptions}
        width={400}
      />
    </div>
    <div styleName="subHeading">
      Gotta catch em all!
    </div>
  </>
);

export default SplashScreen;
