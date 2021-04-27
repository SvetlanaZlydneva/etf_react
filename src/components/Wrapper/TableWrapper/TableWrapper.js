import React from 'react';
import T from 'prop-types';
import styles from './TableWrapper.module.css';

const TableWrapper = ({ children }) => (
  <table className={styles.Wrapper}>{children}</table>
);

TableWrapper.propTypes = {
  children: T.node.isRequired,
};

export default TableWrapper;
