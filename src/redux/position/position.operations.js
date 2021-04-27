import axios from 'axios';
import PositionActions from './position.actions';

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
} = PositionActions;

const createPosition = credentials => async dispatch => {
  dispatch(createRequest());
  try {
    const response = await axios.post('/position/create', credentials);
    dispatch(createSuccess(response.data));
  } catch (error) {
    dispatch(createError(error.message));
  }
};

const deletePosition = id => async dispatch => {
  dispatch(deleteRequest());
  try {
    const response = await axios.delete(`/position/${id}`);
    dispatch(deleteSuccess(response.data));
  } catch (error) {
    dispatch(deleteError(error.message));
  }
};

const updatePosition = (id, credentials) => async dispatch => {
  dispatch(updateRequest());
  try {
    const response = await axios.patch(`/position/${id}`, credentials);
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateError(error.message));
  }
};

const getAll = () => async dispatch => {
  dispatch(getAllRequest());
  try {
    const response = await axios.get('/position/all');
    dispatch(getAllSuccess(response.data));
  } catch (error) {
    dispatch(getAllError(error.message));
  }
};

const getById = id => async dispatch => {
  dispatch(getByIdRequest());
  try {
    const response = await axios.get(`/position/details/${id}`);
    dispatch(getByIdSuccess(response.data));
  } catch (error) {
    dispatch(getByIdError(error.message));
  }
};

export default {
  createPosition,
  deletePosition,
  updatePosition,
  getAll,
  getById,
};
