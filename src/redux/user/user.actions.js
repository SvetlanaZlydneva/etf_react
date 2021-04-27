import { createAction } from '@reduxjs/toolkit';

const createRequest = createAction('user/createRequest');
const createSuccess = createAction('user/createSuccess');
const createError = createAction('user/createError');

const deleteRequest = createAction('user/deleteRequest');
const deleteSuccess = createAction('user/deleteSuccess');
const deleteError = createAction('user/deleteError');

const updateRequest = createAction('user/updateRequest');
const updateSuccess = createAction('user/updateSuccess');
const updateError = createAction('user/updateError');

const loginRequest = createAction('user/loginRequest');
const loginSuccess = createAction('user/loginSuccess');
const loginError = createAction('user/loginError');

const logoutRequest = createAction('user/logoutRequest');
const logoutSuccess = createAction('user/logoutSuccess');
const logoutError = createAction('user/logoutError');

const getAllRequest = createAction('user/getAllRequest');
const getAllSuccess = createAction('user/getAllSuccess');
const getAllError = createAction('user/getAllError');

const getCurrentRequest = createAction('user/getCurrentRequest');
const getCurrentSuccess = createAction('user/getCurrentSuccess');
const getCurrentError = createAction('user/getCurrentError');

const getByIdRequest = createAction('user/getByIdRequest');
const getByIdSuccess = createAction('user/getByIdSuccess');
const getByIdError = createAction('user/getByIdError');

export default {
  createRequest,
  createSuccess,
  createError,
  deleteRequest,
  deleteSuccess,
  deleteError,
  updateRequest,
  updateSuccess,
  updateError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getAllRequest,
  getAllSuccess,
  getAllError,
  getCurrentRequest,
  getCurrentSuccess,
  getCurrentError,
  getByIdRequest,
  getByIdSuccess,
  getByIdError,
};
