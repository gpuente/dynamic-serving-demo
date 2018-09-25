import React from 'react'
import universal from 'react-universal-component';
import styles from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isMobile, isDesktop } = this.props;
    const folder = isMobile ? 'mobile' : 'desktop';

    const Layout = universal(import(`./${folder}/index`), {
      minDelay: 200
    });

    return (
      <div className={styles.container}>
        <div className={styles.debugTitle}>Debug Info:</div>
        <ul className={styles.debugSection}>
          <li>isMobile: {isMobile.toString()}</li>
          <li>isDesktop: {isDesktop.toString()}</li>
          <li>layout loaded: {folder}</li>
        </ul>
        
        <Layout />

      </div>
    );
  }
}

export default App