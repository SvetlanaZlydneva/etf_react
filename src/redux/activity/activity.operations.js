import axios from 'axios';
import ActivityActions from './activity.actions';

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
} = ActivityActions;

const createActivity = credentials => async dispatch => {
  dispatch(createRequest());
  try {
    const response = await axios.post('/activity/create', credentials);
    dispatch(createSuccess(response.data));
  } catch (error) {
    dispatch(createError(error.message));
  }
};

const deleteActivity = id => async dispatch => {
  dispatch(deleteRequest());
  try {
    const response = await axios.delete(`/activity/${id}`);
    dispatch(deleteSuccess(response.data));
  } catch (error) {
    dispatch(deleteError(error.message));
  }
};

const updateActivity = (id, credentials) => async dispatch => {
  dispatch(updateRequest());
  try {
    const response = await axios.patch(`/activity/${id}`, credentials);
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateError(error.message));
  }
};

const getAll = () => async dispatch => {
  dispatch(getAllRequest());
  try {
    const response = await axios.get('/activity/all');
    dispatch(getAllSuccess(response.data));
  } catch (error) {
    dispatch(getAllError(error.message));
  }
};

const getById = id => async dispatch => {
  dispatch(getByIdRequest());
  try {
    const response = await axios.get(`/activity/details/${id}`);
    dispatch(getByIdSuccess(response.data));
  } catch (error) {
    dispatch(getByIdError(error.message));
  }
};

export default {
  createActivity,
  deleteActivity,
  updateActivity,
  getAll,
  getById,
};
