import { createReducer } from '@reduxjs/toolkit';
import { UserActions } from '../user';
import { ObjectActions } from '../object';
import { ActivityActions } from '../activity';
import { OrderActions } from '../order';
import { PositionActions } from '../position';
// get by id add
const setError = (_, { payload }) => payload;
const unSetError = () => null;

const error = createReducer(null, {
  [UserActions.createError]: setError,
  [UserActions.deleteError]: setError,
  [UserActions.updateError]: setError,
  [UserActions.loginError]: setError,
  [UserActions.logoutError]: setError,
  [UserActions.getAllError]: setError,
  [UserActions.getCurrentError]: setError,
  [UserActions.getByIdError]: setError,
  [UserActions.createSuccess]: unSetError,
  [UserActions.deleteSuccess]: unSetError,
  [UserActions.updateSuccess]: unSetError,
  [UserActions.loginSuccess]: unSetError,
  [UserActions.logoutSuccess]: unSetError,
  [UserActions.getAllSuccess]: unSetError,
  [UserActions.getCurrentSuccess]: unSetError,
  [UserActions.getByIdSuccess]: unSetError,

  [ObjectActions.createError]: setError,
  [ObjectActions.deleteError]: setError,
  [ObjectActions.updateError]: setError,
  [ObjectActions.getAllError]: setError,
  [ObjectActions.getByIdError]: setError,
  [ObjectActions.createSuccess]: unSetError,
  [ObjectActions.deleteSuccess]: unSetError,
  [ObjectActions.updateSuccess]: unSetError,
  [ObjectActions.getAllSuccess]: unSetError,
  [ObjectActions.getByIdSuccess]: unSetError,

  [ActivityActions.createError]: setError,
  [ActivityActions.deleteError]: setError,
  [ActivityActions.updateError]: setError,
  [ActivityActions.getAllError]: setError,
  [ActivityActions.getByIdError]: setError,
  [ActivityActions.createSuccess]: unSetError,
  [ActivityActions.deleteSuccess]: unSetError,
  [ActivityActions.updateSuccess]: unSetError,
  [ActivityActions.getAllSuccess]: unSetError,
  [ActivityActions.getByIdSuccess]: unSetError,

  [OrderActions.createError]: setError,
  [OrderActions.deleteError]: setError,
  [OrderActions.updateError]: setError,
  [OrderActions.getAllError]: setError,
  [OrderActions.getByIdError]: setError,
  [OrderActions.updateStatusError]: setError,
  [OrderActions.createSuccess]: unSetError,
  [OrderActions.deleteSuccess]: unSetError,
  [OrderActions.updateSuccess]: unSetError,
  [OrderActions.getAllSuccess]: unSetError,
  [OrderActions.getByIdSuccess]: unSetError,
  [OrderActions.updateStatusSuccess]: unSetError,

  [PositionActions.createError]: setError,
  [PositionActions.deleteError]: setError,
  [PositionActions.updateError]: setError,
  [PositionActions.getAllError]: setError,
  [PositionActions.getByIdError]: setError,
  [PositionActions.createSuccess]: unSetError,
  [PositionActions.deleteSuccess]: unSetError,
  [PositionActions.updateSuccess]: unSetError,
  [PositionActions.getAllSuccess]: unSetError,
  [PositionActions.getByIdSuccess]: unSetError,
});

export default error;
