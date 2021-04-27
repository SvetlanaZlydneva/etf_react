import React from 'react';
import T from 'prop-types';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import styles from './ButtonAdd.module.css';

const Button = ({ onClick, color, margin, description }) => {
  return (
    <button
      className={styles.Button}
      type="button"
      onClick={onClick}
      style={{ color, margin }}
    >
      <AddCircleOutlineRoundedIcon fontSize="large" />
      {description && description}
    </button>
  );
};

Button.defaultProps = {
  color: 'rgba(63, 81, 181, 0.3)',
  description: null,
  margin: '0',
};

Button.propTypes = {
  onClick: T.func.isRequired,
  color: T.string,
  description: T.string,
  margin: T.string,
};

export default Button;
