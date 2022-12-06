import {Component} from 'react';
import Productos from './components/productos';

class App extends Component {
  state = {
    productos: [
      {nombre: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {nombre: 'Caraotas', price: 500, img: '/productos/caraotas.jpg'},
      {nombre: 'Harina Pan', price: 5000, img: '/productos/harina.jpg'},
      {nombre: 'Lechuga', price: 570, img: '/productos/lechuga.jpg'},
    ],
  };
}

export default App;
