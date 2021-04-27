import React from 'react';
import T from 'prop-types';
import styles from './TableTbody.module.css';

const TableTbody = ({ children }) => (
  <tbody className={styles.Tbody}>{children}</tbody>
);

TableTbody.propTypes = {
  children: T.node.isRequired,
};

export default TableTbody;
