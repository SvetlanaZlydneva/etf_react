import axios from 'axios';
import UserActions from './user.actions';

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
} = UserActions;

axios.defaults.baseURL = 'https://etfamily.herokuapp.com/api';

const token = {
  set(TOKEN) {
    axios.defaults.headers.common.Authorization = TOKEN;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const createUser = credentials => async dispatch => {
  dispatch(createRequest());
  try {
    const response = await axios.post('/user/create', credentials);
    dispatch(createSuccess(response.data));
  } catch (error) {
    dispatch(createError(error.message));
  }
};

const deleteUser = id => async dispatch => {
  dispatch(deleteRequest());
  try {
    const response = await axios.delete(`/user/${id}`);
    dispatch(deleteSuccess(response.data));
  } catch (error) {
    dispatch(deleteError(error.message));
  }
};

const updateUser = (id, credentials) => async dispatch => {
  dispatch(updateRequest());
  try {
    const response = await axios.patch(`/user/${id}`, credentials);
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateError(error.message));
  }
};

const login = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/user/login', credentials);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/user/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrent = () => async (dispatch, getState) => {
  const {
    users: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(getCurrentRequest());
  try {
    const response = await axios.get('/user/current');
    dispatch(getCurrentSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentError(error.message));
  }
};

const getAll = () => async dispatch => {
  dispatch(getAllRequest());
  try {
    const response = await axios.get('/user/all');
    dispatch(getAllSuccess(response.data));
  } catch (error) {
    dispatch(getAllError(error.message));
  }
};

const getById = id => async dispatch => {
  dispatch(getByIdRequest());
  try {
    const response = await axios.get(`/user/details/${id}`);
    dispatch(getByIdSuccess(response.data));
  } catch (error) {
    dispatch(getByIdError(error.message));
  }
};

export default {
  createUser,
  deleteUser,
  updateUser,
  logout,
  login,
  getCurrent,
  getAll,
  getById,
};
