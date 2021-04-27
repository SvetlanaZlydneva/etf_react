import React from 'react';
import T from 'prop-types';
import styles from './TableThead.module.css';

const TableThead = ({ children }) => (
  <thead className={styles.Thead}>{children}</thead>
);

TableThead.propTypes = {
  children: T.node.isRequired,
};

export default TableThead;
