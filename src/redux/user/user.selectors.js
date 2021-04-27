const getIsAuthenticated = state => state.users.isAuthenticated;
const getAccess = state => state.users.access;
const getLogin = state => state.users.user.login;
const getAllUsers = state => state.users.items;
const getItemDetails = state => state.users.itemDetails;

export default {
  getIsAuthenticated,
  getAccess,
  getLogin,
  getAllUsers,
  getItemDetails,
};
