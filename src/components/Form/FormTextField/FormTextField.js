import React from 'react';
import T from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';

const FormTextField = ({ label, name, value, required, type, onChange }) => {
  if (name === 'phone') {
    return (
      <InputMask
        mask="+(380) 99 999 99 99"
        maskChar=" "
        onChange={onChange}
        value={value}
      >
        {() => (
          <TextField
            variant="outlined"
            margin="normal"
            required={required}
            type={type}
            fullWidth
            label={label}
            name={name}
            autoComplete="off"
          />
        )}
      </InputMask>
    );
  }
  if (name === 'identificationNumber') {
    return (
      <InputMask
        mask="9999999999"
        maskChar=" "
        onChange={onChange}
        value={value}
      >
        {() => (
          <TextField
            variant="outlined"
            margin="normal"
            required={required}
            type={type}
            fullWidth
            label={label}
            name={name}
            autoComplete="off"
          />
        )}
      </InputMask>
    );
  }
  return (
    <TextField
      variant="outlined"
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
};

FormTextField.defaultProps = {
  required: true,
  type: 'text',
};

FormTextField.propTypes = {
  onChange: T.func.isRequired,
  label: T.string.isRequired,
  name: T.string.isRequired,
  value: T.string.isRequired,
  required: T.bool,
  type: T.string,
};

export default FormTextField;
