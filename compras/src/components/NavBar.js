import {Component} from 'react';
import Logo from './Logo'
import Carro from './Carro';

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgb(0,0,0,0.5)',
  },
};

class NavBar extends Component {
  render () {
    return (
      <nav style={styles.nav}>
        <Logo />
        <Carro/>

      </nav>
    );
  }
}

export default NavBar;
