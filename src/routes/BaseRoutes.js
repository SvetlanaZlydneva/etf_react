import React, { Suspense } from 'react';
import T from 'prop-types';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Paths from './route.paths';
import { UserSelectors } from '../redux/user';
import RouteComponent from './route.components';
import Container from '../components/Container';
import AppBar from '../components/Bar/AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Loader from '../components/Loader';

const {
  InventoryPage,
  TimeSheetPage,
  OrdersPage,
  AuthPage,
  AdminPage,
} = RouteComponent;
const { base } = Paths;

const Routes = ({ onGetIsAuthenticated, onGetAccess }) => (
  <>
    {onGetIsAuthenticated && <AppBar />}
    <Suspense fallback={<Loader />}>
      <Switch>
        <Container>
          {/* login */}
          <PublicRoute
            restricted
            path={base.auth}
            component={AuthPage}
            redirectTo={base.orders}
          />
          {/* orders */}
          <PrivateRoute
            path={base.orders}
            component={OrdersPage}
            redirectTo={base.auth}
          />
          {/* inventory */}
          <PrivateRoute
            path={base.inventory}
            component={InventoryPage}
            redirectTo={base.auth}
          />
          {/* timeSheet */}
          <PrivateRoute
            path={base.timeSheet}
            component={TimeSheetPage}
            redirectTo={base.auth}
          />
          {/* admin */}
          {onGetIsAuthenticated && onGetAccess === 'admin' && (
            <PrivateRoute
              path={base.admin}
              component={AdminPage}
              redirectTo={base.orders}
            />
          )}
        </Container>
      </Switch>
    </Suspense>
  </>
);

Routes.propTypes = {
  onGetAccess: T.string.isRequired,
  onGetIsAuthenticated: T.bool.isRequired,
};

const mapStateToProps = state => ({
  onGetIsAuthenticated: UserSelectors.getIsAuthenticated(state),
  onGetAccess: UserSelectors.getAccess(state),
});

export default connect(mapStateToProps)(Routes);
