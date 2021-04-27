import { createAction } from '@reduxjs/toolkit';

const createRequest = createAction('activity/createRequest');
const createSuccess = createAction('activity/createSuccess');
const createError = createAction('activity/createError');

const deleteRequest = createAction('activity/deleteRequest');
const deleteSuccess = createAction('activity/deleteSuccess');
const deleteError = createAction('activity/deleteError');

const updateRequest = createAction('activity/updateRequest');
const updateSuccess = createAction('activity/updateSuccess');
const updateError = createAction('activity/updateError');

const getAllRequest = createAction('activity/getAllRequest');
const getAllSuccess = createAction('activity/getAllSuccess');
const getAllError = createAction('activity/getAllError');

const getByIdRequest = createAction('activity/getByIdRequest');
const getByIdSuccess = createAction('activity/getByIdSuccess');
const getByIdError = createAction('activity/getByIdError');

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
