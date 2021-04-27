import React from 'react';
import T from 'prop-types';
import styles from './WrapperElementOrder.module.css';

const WrapperElementOrder = ({ children }) => (
  <div className={styles.WrapperElementOrder}>{children}</div>
);

WrapperElementOrder.propTypes = {
  children: T.node.isRequired,
};

export default WrapperElementOrder;
