import React from 'react';

import Quadrado from './Quadrado';

class Tabuleiro extends React.Component {
  renderQuadrado(i) {
    return <Quadrado />;
  }
  render() {
    const status = 'Próximo jogador: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="linha-do-tabuleiro">
          {this.renderQuadrado(0)}
          {this.renderQuadrado(1)}
          {this.renderQuadrado(2)}
        </div>
        <div className="linha-do-tabuleiro">
          {this.renderQuadrado(3)}
          {this.renderQuadrado(4)}
          {this.renderQuadrado(5)}
        </div>
        <div className="linha-do-tabuleiro">
          {this.renderQuadrado(6)}
          {this.renderQuadrado(7)}
          {this.renderQuadrado(8)}
        </div>
      </div>
    );
  }
}

export default Tabuleiro;