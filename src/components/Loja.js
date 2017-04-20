import React from 'react';
import Formulario from './Formulario';
import Listagem from './Listagem';

class Loja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: []
    };
  }

  cadastrar(produto) {
    let produtos = this.state.produtos.slice();
    produtos.push(produto);
    this.setState({
      produtos: produtos
    });
    console.log('Produtos', produtos);
  }

  render() {
    return (
      <div>
        <h1>Loja</h1>
        <hr/>
        <Formulario onCadastrar={(produto) => this.cadastrar(produto)}/>
        <Listagem produtos={this.state.produtos}/>
      </div>
    );
  }
}

export default Loja;