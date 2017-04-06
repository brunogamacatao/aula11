import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Game from './components/Game';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './styl/aula11.css';

const renderApp = (NewRoot) => {
  render(
    <AppContainer>
      <NewRoot />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(Game);

if (module.hot) {
  module.hot.accept('./components/Game', () => {
    const Game = require('./components/Game').default;
    renderApp(Game);
  });
}
