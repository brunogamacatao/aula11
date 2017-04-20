import React from 'react';
import estilo from '../css/Formulario.styl';

class Formulario extends React.Component {
    cadastrar(event) {
        event.preventDefault();
        this.props.onCadastrar({
            produto: this.produto.value,
            preco: this.preco.value
        });
        this.form.reset();
    }
    render() {
        return (
            <form className={estilo.formulario} ref={(input) => this.form = input}>
                <p>
                    <label>Produto:</label>
                    <input type="text" ref={(input) => this.produto = input}/>
                </p>
                <p>
                    <label>Preço:</label>
                    <input type="number" step="0.01" ref={(input)=>this.preco=input}/>
                </p>
                <p>
                    <button onClick={(e) => this.cadastrar(e)}>Cadastrar</button>
                </p>
            </form>
        );
    }
}

export default Formulario;