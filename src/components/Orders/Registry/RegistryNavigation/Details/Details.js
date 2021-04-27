import React from 'react';
import T from 'prop-types';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';
import paths from '../../../../../routes/route.paths';

const { orders } = paths;

const Details = ({ id }) => {
  return (
    <Link className={styles.Link} to={`${orders.details}/${id}`}>
      <DoubleArrowOutlinedIcon fontSize="large" />
    </Link>
  );
};

Details.propTypes = {
  id: T.string.isRequired,
};

export default Details;
