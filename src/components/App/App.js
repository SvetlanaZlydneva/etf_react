import React, { useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { UserOperations, UserSelectors } from '../../redux/user';
import { ErrorSelectors } from '../../redux/error';
import NotificationPnotify from '../Notification';
import Routes from '../../routes/BaseRoutes';

function App({ onGetError, onGetCurrentUser, IsAuthenticated }) {
  useEffect(() => {
    if (!IsAuthenticated) onGetCurrentUser();
  }, [IsAuthenticated, onGetCurrentUser, onGetError]);
  return (
    <>
      {onGetError && <NotificationPnotify text={onGetError} />}
      <Routes />
    </>
  );
}

App.defaultProps = {
  onGetError: null,
};

App.propTypes = {
  IsAuthenticated: T.bool.isRequired,
  onGetCurrentUser: T.func.isRequired,
  onGetError: T.string,
};

const mapStateToProps = state => ({
  IsAuthenticated: UserSelectors.getIsAuthenticated(state),
  onGetError: ErrorSelectors.getError(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: UserOperations.getCurrent,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
