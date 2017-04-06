import React from 'react';

import Quadrado from './Quadrado';

class Tabuleiro extends React.Component {
  constructor() {
    super();

    this.state = {
      quadrados: Array(9).fill(null),
      proximo: 'X'
    };
  }

  renderQuadrado(i) {
    return <Quadrado valor={this.state.quadrados[i]} onClick={() => this.handleClick(i)}/>;
  }

  handleClick(i) {
    const quadrados = this.state.quadrados.slice();

    if (this.calculaVencedor(quadrados) || quadrados[i]) {
      return;
    }

    quadrados[i] = this.state.proximo;

    this.setState({
      quadrados: quadrados,
      proximo: this.state.proximo === 'X' ? 'O' : 'X'
    });
  }

  calculaVencedor(quadrados) {
    const valores = ['X', 'O'];

    for (let i = 0; i < valores.length; i++) {
      let valor = valores[i];

      // Checa se há linhas iguais
      for (let linha = 0; linha < 3; linha++) {
        if (quadrados[linha * 3 + 0] === valor && 
            quadrados[linha * 3 + 1] === valor &&
            quadrados[linha * 3 + 2] === valor) return valor;
      }

      // Verifica se há colunas iguais
      for (let coluna = 0; coluna < 3; coluna++) {
        if (quadrados[0 + coluna] === valor && 
            quadrados[3 + coluna] === valor &&
            quadrados[6 + coluna] === valor) return valor;
      }

      // Verifica se há diagonais iguais
      if (quadrados[0] === valor && 
          quadrados[4] === valor &&
          quadrados[8] === valor) return valor;
      if (quadrados[2] === valor && 
          quadrados[4] === valor &&
          quadrados[6] === valor) return valor;
    }
  }

  reinicia() {
    this.setState({
      quadrados: Array(9).fill(null)
    });
  }

  renderRestart() {
    if (this.calculaVencedor(this.state.quadrados)) {
      return (
        <button onClick={() => this.reinicia()}>Reiniciar</button>
      );
    }
  }

  render() {
    const vencedor = this.calculaVencedor(this.state.quadrados);
    let status;

    if (vencedor) {
      console.log('Há vencedor');
      status = 'Vencedor: ' + vencedor;
    } else {
      status = 'Próximo jogador: ' + this.state.proximo;
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div>{this.renderRestart()}</div>
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