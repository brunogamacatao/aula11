import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/aula11.css';

import Jogo from './components/Jogo';

const renderApp = (NewRoot) => {
  render(
    <AppContainer>
      <NewRoot />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(Jogo);

if (module.hot) {
  module.hot.accept('./components/Jogo', () => {
    const Jogo = require('./components/Jogo').default;
    renderApp(Jogo);
  });
}
