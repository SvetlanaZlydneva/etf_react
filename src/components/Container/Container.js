import React from 'react';
import T from 'prop-types';
import styles from './Container.module.css';

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

Container.propTypes = {
  children: T.node.isRequired,
};

export default Container;
