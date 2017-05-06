import React from 'react';


class Login extends React.Component {
  entrar(event) {
    event.preventDefault();
    this.props.login(this.login.value, this.password.value);
    this.form.reset();
  }

  render() {
    return (
      <div className="container">
        <form ref={(input) => this.form = input} onSubmit={(e) => this.entrar(e)}>
          <div className="form-group">
            <label>Login:</label>
            <input className="form-control" type="text" ref={(input) => this.login = input} />
          </div>
          <div className="form-group">
            <label>Senha:</label>
            <input className="form-control" type="password" ref={(input) => this.password = input} />
          </div>
          <button type="submit" className="btn btn-default">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;