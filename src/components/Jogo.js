import React from 'react';

import Tabuleiro from './Tabuleiro';

class Jogo extends React.Component {
  render() {
    return (
      <div className="jogo">
        <div>
          <Tabuleiro />
        </div>
        <div className="info-do-jogo">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Jogo;
