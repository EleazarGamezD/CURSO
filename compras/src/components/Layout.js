import {Component} from 'react';

const styles = {
  layout: {
    backgroundColor: 'white',
    color: '#',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width: '1200px',
    backgroundColor: '#CACACA',
  },
};

class Layout extends Component {
  render () {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {this.props.children}

        </div>

      </div>
    );
  }
}

export default Layout;
