import axios from 'axios';
import ObjectActions from './object.actions';

const {
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
} = ObjectActions;

const createObject = credentials => async dispatch => {
  dispatch(createRequest());
  try {
    const response = await axios.post('/object/create', credentials);
    dispatch(createSuccess(response.data));
  } catch (error) {
    dispatch(createError(error.message));
  }
};

const deleteObject = id => async dispatch => {
  dispatch(deleteRequest());
  try {
    const response = await axios.delete(`/object/${id}`);
    dispatch(deleteSuccess(response.data));
  } catch (error) {
    dispatch(deleteError(error.message));
  }
};

const updateObject = (id, credentials) => async dispatch => {
  dispatch(updateRequest());
  try {
    const response = await axios.patch(`/object/${id}`, credentials);
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateError(error.message));
  }
};

const getAll = () => async dispatch => {
  dispatch(getAllRequest());
  try {
    const response = await axios.get('/object/all');
    dispatch(getAllSuccess(response.data));
  } catch (error) {
    dispatch(getAllError(error.message));
  }
};

const getById = id => async dispatch => {
  dispatch(getByIdRequest());
  try {
    const response = await axios.get(`/object/details/${id}`);
    dispatch(getByIdSuccess(response.data));
  } catch (error) {
    dispatch(getByIdError(error.message));
  }
};

export default {
  createObject,
  deleteObject,
  updateObject,
  getAll,
  getById,
};
