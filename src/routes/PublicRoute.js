import React from 'react';
import T from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserSelectors } from '../redux/user';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    // eslint-disable-next-line
    {...routeProps}
    render={props =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        // eslint-disable-next-line
        <Component {...props} />
      )
    }
  />
);

PublicRoute.propTypes = {
  component: T.elementType.isRequired,
  isAuthenticated: T.bool.isRequired,
  redirectTo: T.string.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: UserSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
