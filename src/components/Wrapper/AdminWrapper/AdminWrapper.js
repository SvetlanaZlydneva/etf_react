import React from 'react';
import T from 'prop-types';
import styles from './AdminWrapper.module.css';

const Wrapper = ({ children }) => (
  <div className={styles.Wrapper}>{children}</div>
);

Wrapper.propTypes = {
  children: T.node.isRequired,
};

export default Wrapper;
