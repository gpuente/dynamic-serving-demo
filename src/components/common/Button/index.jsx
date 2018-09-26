import React from 'react';
import styles from './styles.css';

class Button extends React.Component {
  clickhandler = () => {
    alert('This common button is rendered on all versions, no matter user device');
  }

  render() {
    return (
      <div className={styles.button} onClick={this.clickhandler}>Common Button</div>
    );
  }
};

export default Button;
