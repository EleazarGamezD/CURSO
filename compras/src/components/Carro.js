import {Component} from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
  carro: {
    fontWeight: '700',
    fontSize: '2rem',
    border: 'none',
    borderRadius: '15px',
    backgroundColor: '#147EE2',
    cursor: 'pointer',
  },
  bubble: {
    position: 'relative',
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  render () {
    const {carro, esCarroVisible, mostrarCarro} = this.props;

    const cantidad = carro.reduce ((acc, el) => acc + el.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>

        <button onClick={mostrarCarro} style={styles.carro}>
          Carrito
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
