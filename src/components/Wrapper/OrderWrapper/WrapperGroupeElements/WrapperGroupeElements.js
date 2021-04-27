import React from 'react';
import T from 'prop-types';
import styles from './WrapperGroupeElements.module.css';

const WrapperGroupeElements = ({ children }) => (
  <div className={styles.Wrapper}>{children}</div>
);

WrapperGroupeElements.propTypes = {
  children: T.node.isRequired,
};

export default WrapperGroupeElements;
