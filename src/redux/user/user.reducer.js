import { createReducer, combineReducers } from '@reduxjs/toolkit';
import UserActions from './user.actions';

const {
  createSuccess,
  deleteSuccess,
  updateSuccess,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getAllSuccess,
  getCurrentSuccess,
  getCurrentError,
  getByIdSuccess,
} = UserActions;

const initialUserState = { snp: null, login: null, phone: null };

const user = createReducer(initialUserState, {
  [loginSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initialUserState,
  [getCurrentSuccess]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [getAllSuccess]: (_, { payload }) => payload,
  [createSuccess]: (state, { payload }) => [...state, payload],
  [updateSuccess]: (state, { payload }) =>
    // eslint-disable-next-line
    state.map(item => (item._id === payload._id ? payload : item)),
  [deleteSuccess]: (state, { payload }) =>
    state.filter(({ _id }) => _id !== payload),
});

const itemDetails = createReducer(null, {
  [getByIdSuccess]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [getCurrentSuccess]: () => true,
  [getCurrentError]: () => false,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const access = createReducer('', {
  [loginSuccess]: (_, { payload }) => payload.access,
  [getCurrentSuccess]: (_, { payload }) => payload.access,
  [logoutSuccess]: () => '',
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  access,
  items,
  itemDetails,
});
