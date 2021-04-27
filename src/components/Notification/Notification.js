import React from 'react';
import T from 'prop-types';
import styles from './Notification.module.css';

const NotificationPnotify = ({ title, text }) => (
  <div className={styles.Wrapper}>
    <div className={styles.Title}>{title}</div>
    <div className={styles.Text}>{text}</div>
  </div>
);

NotificationPnotify.defaultProps = {
  title: 'Error',
};

NotificationPnotify.propTypes = {
  title: T.string,
  text: T.string.isRequired,
};

export default NotificationPnotify;
