import {Component} from 'react';
const styles = {
  bubbleAlert: {
    backgroundColor: '#C11515',
    borderRadius: '5px',
    color: 'white',
    fontSize: '0.9rem',
    width: '20px',
  },
};

class BubbleAlert extends Component {
  getNumber (n) {
    if (!n) {
      return ' ';
    }
    return n;
  }
  render () {
    const {value} = this.props;
    return <span style={styles.bubbleAlert}>{this.getNumber (value)}</span>;
  }
}
export default BubbleAlert;
