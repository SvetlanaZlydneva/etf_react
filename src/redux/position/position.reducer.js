import { createReducer, combineReducers } from '@reduxjs/toolkit';
import PositionActions from './position.actions';

const {
  createSuccess,
  deleteSuccess,
  updateSuccess,
  getAllSuccess,
  getByIdSuccess,
} = PositionActions;

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

export default combineReducers({
  items,
  itemDetails,
});
