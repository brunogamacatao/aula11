import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/actionCreators';

class Formulario extends React.Component {
    cadastrar(event) {
        event.preventDefault();
        this.props.cadastrarProduto({
            foto: this.foto.value,
            nome: this.nome.value,
            preco: this.preco.value
        });
        this.form.reset();
    }
    render() {
        return (
            <form ref={(input) => this.form = input}>
                <div className="form-group">
                    <label>Foto:</label>
                    <input className="form-control" type="text" ref={(input) => this.foto = input}/>
                </div>
                <div className="form-group">
                    <label>Nome:</label>
                    <input className="form-control" type="text" ref={(input) => this.nome = input}/>
                </div>
                <div className="form-group">
                    <label>Preço:</label>
                    <input className="form-control" type="number" step="0.01" ref={(input)=>this.preco=input}/>
                </div>
                <button className="btn btn-default" onClick={(e) => this.cadastrar(e)}>Cadastrar</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
  return {
    produtos: state.produtos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);