import React from 'react';
import T from 'prop-types';
import styles from './Memo.module.css';

const DetailsTbody = ({ item }) => (
  <div className={styles.Memo}>{item[0].note}</div>
);

DetailsTbody.propTypes = {
  item: T.arrayOf(T.objectOf(T.string)).isRequired,
};

export default DetailsTbody;
