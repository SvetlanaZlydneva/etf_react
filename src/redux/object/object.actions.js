import { createAction } from '@reduxjs/toolkit';

const createRequest = createAction('object/createRequest');
const createSuccess = createAction('object/createSuccess');
const createError = createAction('object/createError');

const deleteRequest = createAction('object/deleteRequest');
const deleteSuccess = createAction('object/deleteSuccess');
const deleteError = createAction('object/deleteError');

const updateRequest = createAction('object/updateRequest');
const updateSuccess = createAction('object/updateSuccess');
const updateError = createAction('object/updateError');

const getAllRequest = createAction('object/getAllRequest');
const getAllSuccess = createAction('object/getAllSuccess');
const getAllError = createAction('object/getAllError');

const getByIdRequest = createAction('object/getByIdRequest');
const getByIdSuccess = createAction('object/getByIdSuccess');
const getByIdError = createAction('object/getByIdError');

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
