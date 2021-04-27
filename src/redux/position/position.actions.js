import { createAction } from '@reduxjs/toolkit';

const createRequest = createAction('position/createRequest');
const createSuccess = createAction('position/createSuccess');
const createError = createAction('position/createError');

const deleteRequest = createAction('position/deleteRequest');
const deleteSuccess = createAction('position/deleteSuccess');
const deleteError = createAction('position/deleteError');

const updateRequest = createAction('position/updateRequest');
const updateSuccess = createAction('position/updateSuccess');
const updateError = createAction('position/updateError');

const getAllRequest = createAction('position/getAllRequest');
const getAllSuccess = createAction('position/getAllSuccess');
const getAllError = createAction('position/getAllError');

const getByIdRequest = createAction('position/getByIdRequest');
const getByIdSuccess = createAction('position/getByIdSuccess');
const getByIdError = createAction('position/getByIdError');

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
  getAllRequest,
  getAllSuccess,
  getAllError,
  getByIdRequest,
  getByIdSuccess,
  getByIdError,
};
