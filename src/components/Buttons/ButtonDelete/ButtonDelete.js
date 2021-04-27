import React from 'react';
import T from 'prop-types';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Button = ({ onClick, color }) => {
  return (
    <button type="button" onClick={onClick} style={{ color }}>
      <DeleteOutlineOutlinedIcon fontSize="large" />
    </button>
  );
};

Button.defaultProps = {
  color: 'rgba(154, 0, 54, 0.7)',
};

Button.propTypes = {
  onClick: T.func.isRequired,
  color: T.string,
};

export default Button;
