import axios from 'axios';
import OrderActions from './order.actions';

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
} = OrderActions;

const createOrder = credentials => async dispatch => {
  dispatch(createRequest());
  try {
    const response = await axios.post('/order/create', credentials);
    dispatch(createSuccess(response.data));
  } catch (error) {
    dispatch(createError(error.message));
  }
};

const deleteOrder = id => async dispatch => {
  dispatch(deleteRequest());
  try {
    const response = await axios.delete(`/order/${id}`);
    dispatch(deleteSuccess(response.data));
  } catch (error) {
    dispatch(deleteError(error.message));
  }
};

const updateOrder = (id, credentials) => async dispatch => {
  dispatch(updateRequest());
  try {
    const response = await axios.patch(`/order/${id}`, credentials);
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateError(error.message));
  }
};

const getAll = () => async dispatch => {
  dispatch(getAllRequest());
  try {
    const response = await axios.get('/order/all');
    dispatch(getAllSuccess(response.data));
  } catch (error) {
    dispatch(getAllError(error.message));
  }
};

const getById = id => async dispatch => {
  dispatch(getByIdRequest());
  try {
    const response = await axios.get(`/order/details/${id}`);
    dispatch(getByIdSuccess(response.data));
  } catch (error) {
    dispatch(getByIdError(error.message));
  }
};

export default {
  createOrder,
  deleteOrder,
  updateOrder,
  getAll,
  getById,
};
