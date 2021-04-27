import React from 'react';
import T from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Button = ({ onClick, color }) => {
  return (
    <button type="button" onClick={onClick} style={{ color }}>
      <CheckCircleIcon fontSize="large" />
    </button>
  );
};

Button.defaultProps = {
  color: 'rgba(0, 106, 0, 0.7)',
};

Button.propTypes = {
  onClick: T.func.isRequired,
  color: T.string,
};

export default Button;
