import React from 'react';
import T from 'prop-types';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { connect } from 'react-redux';
import { UserOperations, UserSelectors } from '../../redux/user';
import styles from './UserMenu.module.css';

const UserMenu = ({ onGetLogin, onLogOut }) => {
  return (
    <div className={styles.UserMenu}>
      <p className={styles.Login}>{onGetLogin}</p>
      <button type="submit" onClick={onLogOut}>
        <ExitToAppOutlinedIcon fontSize="large" style={{ color: '#fff' }} />
      </button>
    </div>
  );
};

UserMenu.propTypes = {
  onGetLogin: T.string.isRequired,
  onLogOut: T.func.isRequired,
};

const mapStateToProps = state => ({
  onGetLogin: UserSelectors.getLogin(state),
});

const mapDispatchToProps = {
  onLogOut: UserOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
