import React from 'react';
import T from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import styles from './RegistryBody.module.css';

const ModificationSum = sum => {
  return (+sum).toFixed(2);
};
const ModificationDate = date => {
  return moment(date).format('DD-MM-yyyy');
};

const RegistryBody = ({ items }) => {
  return (
    <ul className={styles.List}>
      {items.map(item => {
        let body = {};
        if (item.sum) body.sum = ModificationSum(item.sum);
        if (item.blackList && item.blackList === 'Да')
          body.blackList = 'BlackList';
        if (item.date) body.date = ModificationDate(item.date);
        if (item.birthday) body.birthday = ModificationDate(item.birthday);
        if (item.passportDateOfIssue)
          body.passportDateOfIssue = ModificationDate(item.passportDateOfIssue);
        body = { ...item, ...body };
        return (
          <li key={uuidv4()} className={styles.Item}>
            {Object.values(body).join(' ')}
          </li>
        );
      })}
    </ul>
  );
};

RegistryBody.propTypes = {
  items: T.arrayOf(T.objectOf(T.oneOfType([T.string, T.number]))).isRequired,
};

export default RegistryBody;
