import React from 'react';
import T from 'prop-types';
import styles from './WrapperGroupeForm.module.css';

const WrapperGroupeForm = ({ children }) => (
  <div className={styles.Wrapper}>{children}</div>
);

WrapperGroupeForm.propTypes = {
  children: T.node.isRequired,
};

export default WrapperGroupeForm;
