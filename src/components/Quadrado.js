import React from 'react';

class Quadrado extends React.Component {
  render() {
    return (
      <button className="quadrado" onClick={() => this.props.onClick()}>
        { this.props.valor }
      </button>
    );
  }
}

export default Quadrado;