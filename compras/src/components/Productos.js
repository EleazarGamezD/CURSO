import {Component} from 'react';
import Producto from './Producto';
class Productos extends Component {
  render () {
    console.log (this.props);
    const {productos, agregarAlCarro} = this.props;
    return (
      <div>
        {productos.map (producto => (
          <Producto
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        ))}

      </div>
    );
  }
}
export default Productos;
