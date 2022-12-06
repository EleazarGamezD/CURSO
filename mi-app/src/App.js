import {Component} from 'react';
class App extends Component {
  state = {
    valor: 3,
  };
  render () {
    return (
      <div>
        <p>hola mundo</p>
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState ({valor: 2})}
        >
          Enviar{' '}
        </button>
      </div>
    );
  }
}

export default App;
