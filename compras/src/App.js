import {Component} from 'react';
import Productos from './components/Productos';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Caraotas', price: 500, img: '/productos/caraotas.jpg'},
      {name: 'Harina Pan', price: 5000, img: '/productos/harina.jpg'},
      {name: 'Lechuga', price: 570, img: '/productos/lechuga.jpg'},
    ],
  };
  render () {
    return (
      <div>
        <Productos
          agregarAlCarro={() => console.log ('todavia no hacemos nada')}
        />
      </div>
    );
  }
}

export default App;
