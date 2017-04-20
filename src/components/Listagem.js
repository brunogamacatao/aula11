import React from 'react';

class Listagem extends React.Component {
  renderProduto(p) {
    return (
      <tr>
        <td>{p.produto}</td><td>{p.preco}</td>
      </tr>
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Produto</th><th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {this.props.produtos.map((p) => this.renderProduto(p))}
        </tbody>
      </table>
    );
  }
}

export default Listagem;