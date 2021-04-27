import React from 'react';
import T from 'prop-types';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const Button = ({ onClick, color }) => {
  return (
    <button type="button" onClick={onClick} style={{ color }}>
      <CancelRoundedIcon fontSize="large" />
    </button>
  );
};

Button.defaultProps = {
  color: 'rgba(160, 0, 0, 0.7)',
};

Button.propTypes = {
  onClick: T.func.isRequired,
  color: T.string,
};

export default Button;
