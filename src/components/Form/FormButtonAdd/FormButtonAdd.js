import React from 'react';
import T from 'prop-types';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import styles from './FormButtonAdd.module.css';

const FormButtonAdd = ({ onClick }) => {
  return (
    <button type="button" className={styles.Add} onClick={onClick}>
      <AddCircleOutlineRoundedIcon fontSize="large" />
    </button>
  );
};

FormButtonAdd.propTypes = {
  onClick: T.func.isRequired,
};

export default FormButtonAdd;
