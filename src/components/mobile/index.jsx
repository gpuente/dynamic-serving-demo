import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from '../common/Button';
import styles from './styles.css'

const MobileLayout = props => (
  <div>
    <Header />
    <div className={styles.content}>
      Mobile Layout
      <Button />
    </div>
    <Footer />
  </div>
);

export default MobileLayout;