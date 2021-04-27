import React from 'react';
import T from 'prop-types';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const Button = ({ onClick, color }) => {
  return (
    <button type="button" onClick={onClick} style={{ color }}>
      <EditOutlinedIcon fontSize="large" />
    </button>
  );
};

Button.defaultProps = {
  color: 'rgba(255, 125, 0, 0.7)',
};

Button.propTypes = {
  onClick: T.func.isRequired,
  color: T.string,
};

export default Button;
