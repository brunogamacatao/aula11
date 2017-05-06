import React from 'react';
import Formulario from './Formulario';
import Listagem from './Listagem';

class Loja extends React.Component {
  render() {
    return (
      <div>
        <h1>Loja</h1>
        <hr/>
        <Formulario {...this.props}/>
        <Listagem {...this.props}/>
      </div>
    );
  }
}

export default Loja;