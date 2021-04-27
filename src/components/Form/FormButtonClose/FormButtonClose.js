import React from 'react';
import T from 'prop-types';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import styles from './FormButtonClose.module.css';

const FormButtonClose = ({ onClick }) => {
  return (
    <button type="button" className={styles.Close} onClick={onClick}>
      <CancelOutlinedIcon fontSize="large" />
    </button>
  );
};

FormButtonClose.propTypes = {
  onClick: T.func.isRequired,
};

export default FormButtonClose;
