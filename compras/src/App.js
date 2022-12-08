import {Component} from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Title';
import NavBar from './components/NavBar';
class App extends Component {
  state = {
    productos: [
      {
        name: 'Tomate',
        price: 1500,
        img: '/productos/tomate.jpg',
      },
      {
        name: 'Caraotas',
        price: 500,
        img: '/productos/caraota.jpg',
      },
      {
        name: 'Harina Pan',
        price: 5000,
        img: '/productos/harina.jpg',
      },
      {
        name: 'Lechuga',
        price: 570,
        img: '/productos/lechuga.jpg',
      },
    ],
    carro: [
      //   {
      //     name: 'Lechuga',
      //     price: 570,
      //     img: '/productos/lechuga.jpg',
      //     cantidad: 1,
      //   },
    ],
  };
  agregarAlCarro = producto => {
      return this.setState ({
      carro: this.state.carro.concat ({...producto, cantidad: 1}),
    });
  };
  render () {
    console.log (this.state.carro);
    return (
      <div>
        <NavBar />

        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>

      </div>
    );
  }
}

export default App;
