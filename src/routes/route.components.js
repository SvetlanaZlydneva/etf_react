import { lazy } from 'react';

const InventoryPage = lazy(() =>
  import('../pages/InventoryPage' /* webpackChunkName: "inventory-page" */),
);

const TimeSheetPage = lazy(() =>
  import('../pages/TimeSheetPage' /* webpackChunkName: "time-sheet-page" */),
);

const OrdersPage = lazy(() =>
  import('../pages/OrdersPage' /* webpackChunkName: "orders-page" */),
);

const AuthPage = lazy(() =>
  import('../pages/AuthPage' /* webpackChunkName: "auth-page" */),
);

const AdminPage = lazy(() =>
  import('../pages/AdminPage' /* webpackChunkName: "admin-page" */),
);

export default {
  InventoryPage,
  TimeSheetPage,
  OrdersPage,
  AuthPage,
  AdminPage,
};
