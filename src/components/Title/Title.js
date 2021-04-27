import React from 'react';
import T from 'prop-types';
import styles from './Title.module.css';

const Title = ({ title, option }) => {
  if (option === 2) return <h2 className={styles.TitleH2}>{title}</h2>;
  if (option === 3) return <h3 className={styles.TitleH2}>{title}</h3>;
  return <h1 className={styles.TitleH1}>{title}</h1>;
};

Title.defaultProps = {
  option: 1,
};

Title.propTypes = {
  title: T.string.isRequired,
  option: T.number,
};

export default Title;
