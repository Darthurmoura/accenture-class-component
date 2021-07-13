import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    texto: 'AEHOOOO',
  }

  handleClick() {
    alert('Alerta ativado!');
  }

  handleTextChange(e) {
    this.setState({
      texto: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Dale, {this.props.stuff.name}.</h1>
        <h2>Tu tem {this.props.stuff.age} anos.</h2>
        <input type='text' onChange={this.handleTextChange.bind(this)}></input>
        <button onClick={this.handleClick.bind(this)}>Exibir alerta</button>
        <h3>{this.state.texto}</h3>
      </div>
    )
  }
}

const stuff = {
  name: 'Daniel',
  age: 35,
};

ReactDOM.render(
  <React.StrictMode>
    <App stuff={stuff} />
  </React.StrictMode>,
  document.getElementById('root')
);
