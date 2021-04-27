import React from 'react';
import T from 'prop-types';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const Button = ({ onClick, color }) => {
  return (
    <button type="button" onClick={onClick} style={{ color }}>
      <CancelOutlinedIcon fontSize="large" />
    </button>
  );
};

Button.defaultProps = {
  color: 'rgba(154, 0, 54, 0.3)',
};

Button.propTypes = {
  onClick: T.func.isRequired,
  color: T.string,
};

export default Button;
