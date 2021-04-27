import React from 'react';
import T from 'prop-types';
import TextField from '@material-ui/core/TextField';

const FormTextarea = ({ label, name, value, required, type, onChange }) => (
  <TextField
    id="outlined-multiline-flexible"
    variant="outlined"
    multiline
    rowsMax={4}
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

FormTextarea.defaultProps = {
  required: true,
  type: 'text',
};

FormTextarea.propTypes = {
  onChange: T.func.isRequired,
  label: T.string.isRequired,
  name: T.string.isRequired,
  value: T.string.isRequired,
  required: T.bool,
  type: T.string,
};

export default FormTextarea;
