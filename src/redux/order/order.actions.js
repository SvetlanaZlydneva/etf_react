import { createAction } from '@reduxjs/toolkit';

const createRequest = createAction('order/createRequest');
const createSuccess = createAction('order/createSuccess');
const createError = createAction('order/createError');

const deleteRequest = createAction('order/deleteRequest');
const deleteSuccess = createAction('order/deleteSuccess');
const deleteError = createAction('order/deleteError');

const updateRequest = createAction('order/updateRequest');
const updateSuccess = createAction('order/updateSuccess');
const updateError = createAction('order/updateError');

const getAllRequest = createAction('order/getAllRequest');
const getAllSuccess = createAction('order/getAllSuccess');
const getAllError = createAction('order/getAllError');

const getByIdRequest = createAction('order/getByIdRequest');
const getByIdSuccess = createAction('order/getByIdSuccess');
const getByIdError = createAction('order/getByIdError');

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
