import React from 'react';
import T from 'prop-types';
import Button from '@material-ui/core/Button';

const FormButtonSubmit = ({ value }) => {
  return (
    <Button type="submit" fullWidth variant="contained" color="primary">
      {value}
    </Button>
  );
};

FormButtonSubmit.propTypes = {
  value: T.string.isRequired,
};

export default FormButtonSubmit;
