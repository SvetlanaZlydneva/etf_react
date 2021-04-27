import React from 'react';
import T from 'prop-types';
import RemoveRedEyeRoundedIcon from '@material-ui/icons/RemoveRedEyeRounded';

const Button = ({ onClick, color }) => {
  return (
    <button type="button" onClick={onClick} style={{ color }}>
      <RemoveRedEyeRoundedIcon fontSize="large" />
    </button>
  );
};

Button.defaultProps = {
  color: '#3f51b5',
};

Button.propTypes = {
  onClick: T.func.isRequired,
  color: T.string,
};

export default Button;
