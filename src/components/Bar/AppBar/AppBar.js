import React from 'react';
import styles from './AppBar.module.css';
import Container from '../../Container';
import Navigation from '../../Navigation';
import UserMenu from '../../UserMenu';

const AppBar = () => {
  return (
    <header className={styles.AppBar}>
      <Container>
        <div className={styles.Wrapper}>
          <Navigation />
          <UserMenu />
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
