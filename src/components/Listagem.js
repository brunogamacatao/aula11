import React from 'react';

class Listagem extends React.Component {
  renderProduto(p) {
    return (
      <tr key={p.id}>
        <td><img src={p.foto} alt="" width="50" height="50"/></td>
        <td>{p.nome}</td>
        <td>{p.preco}</td>
        <td>
          <button type="submit" className="btn btn-default" onClick={() => this.props.excluirProduto(p.id)}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th></th><th>Produto</th><th>Preço</th><th></th>
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