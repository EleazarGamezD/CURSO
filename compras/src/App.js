import {Component} from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Title from './components/Tittle';
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
    esCarroVisible: false,
  };
  agregarAlCarro = producto => {
    const {carro} = this.state;
    if (carro.find (x => x.name === producto.name)) {
      const newCarro = carro.map (
        x =>
          x.name === producto.name
            ? {
                ...x,
                cantidad: x.cantidad + 1,
              }
            : x
      );
      return this.setState ({carro: newCarro});
    }
    return this.setState ({
      carro: this.state.carro.concat ({...producto, cantidad: 1}),
    });
  };
  mostrarCarro = () => {
    if (this.state.carro.length) {
      return;
    }
    this.setState ({esCarroVisible: !this.state.esCarroVisible});
  };

  render () {
    const {esCarroVisible} = this.props;
      return (
      <div>
        <NavBar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />

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
