import React from 'react';
import T from 'prop-types';
import TextRotationNoneOutlinedIcon from '@material-ui/icons/TextRotationNoneOutlined';
import { Link } from 'react-router-dom';
import styles from './Edit.module.css';
import paths from '../../../../../routes/route.paths';

const { orders } = paths;

const Edit = ({ id }) => {
  return (
    <Link className={styles.Link} to={`${orders.details}/${id}`}>
      <TextRotationNoneOutlinedIcon fontSize="large" />
    </Link>
  );
};

Edit.propTypes = {
  id: T.string.isRequired,
};

export default Edit;
