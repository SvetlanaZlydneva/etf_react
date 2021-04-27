import React from 'react';
import T from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './FormTextareaMemo.module.css';

const FormTextareaMemo = ({ label, name, value, required, type, onChange }) => (
  <TextField
    id="outlined-multiline-flexible"
    className={styles.Textarea}
    variant="outlined"
    multiline
    rows={20}
    margin="normal"
    required={required}
    type={type}
    fullWidth
    label={label}
    name={name}
    value={value}
    autoComplete="off"
    onChange={onChange}
  />
);

FormTextareaMemo.defaultProps = {
  required: true,
  type: 'text',
};

FormTextareaMemo.propTypes = {
  onChange: T.func.isRequired,
  label: T.string.isRequired,
  name: T.string.isRequired,
  value: T.string.isRequired,
  required: T.bool,
  type: T.string,
};

export default FormTextareaMemo;
