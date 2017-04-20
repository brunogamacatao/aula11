import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/aula11.css';

import Loja from './components/Loja';

const renderApp = (NewRoot) => {
  render(
    <AppContainer>
      <NewRoot />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(Loja);

if (module.hot) {
  module.hot.accept('./components/Loja', () => {
    const Loja = require('./components/Loja').default;
    renderApp(Loja);
  });
}
