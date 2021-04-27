import React from 'react';
import T from 'prop-types';
import styles from './FormWrapper.module.css';

const FormWrapper = ({ children, onSubmit, width, units }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={styles.FormWrapper}
      style={{ width: `${width}${units}` }}
      autoComplete="off"
    >
      {children}
    </form>
  );
};
FormWrapper.defaultProps = {
  width: 300,
  units: 'px',
};
FormWrapper.propTypes = {
  children: T.node.isRequired,
  onSubmit: T.func.isRequired,
  width: T.number,
  units: T.string,
};

export default FormWrapper;
