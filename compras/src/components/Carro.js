import {Component} from 'react';
import BubbleAlert from './BubbleAlert';
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
    position:'relative',
    left: 12,
    top: 20,
  },
};

class Carro extends Component {
  render () {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={10} />
        </span>

        <button style={styles.carro}>
          Carrito
        </button>

      </div>
    );
  }
}

export default Carro;
