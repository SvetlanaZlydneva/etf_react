import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { FormWrapper, FormTextField, FormButtonSubmit } from '../../../Form';
import { UserOperations, UserSelectors } from '../../../../redux/user';
import Loader from '../../../Loader';
import Notification from '../../../Notification';

function Edit({ id, onGetById, onGetDetails, onSubmit, hideModal }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const [snp, setSnp] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [access, setAccess] = useState('');
  useEffect(() => {
    onGetById(id);
    setDetails(onGetDetails);
  }, [id, onGetById, onGetDetails]);
  const handleChangeSnp = event => {
    setSnp(event.target.value);
  };
  const handleChangeLogin = event => {
    setLogin(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  const handleChangePhone = event => {
    setPhone(event.target.value);
  };
  const handleChangeAccess = event => {
    setAccess(event.target.value);
  };
  function reset() {
    setSnp('');
    setLogin('');
    setPassword('');
    setPhone('');
    setAccess('');
  }
  function check() {
    return snp || login || password || phone || access;
  }
  function prepare() {
    const credentials = {};
    if (snp) credentials.snp = snp;
    if (login) credentials.login = login;
    if (password) credentials.password = password;
    if (phone) credentials.phone = phone;
    if (access) credentials.access = access;
    return credentials;
  }
  const handleSubmit = event => {
    event.preventDefault();
    if (check()) {
      onSubmit(id, { ...prepare() });
      reset();
      hideModal();
    }
    setError(true);
  };
  return !details ? (
    <Loader />
  ) : (
    <>
      {error && <Notification text="Not found changes" />}
      <FormWrapper onSubmit={handleSubmit}>
        <FormTextField
          label="ФИО"
          name="snp"
          value={snp || details.snp}
          onChange={handleChangeSnp}
        />
        <FormTextField
          label="Логин"
          name="login"
          value={login || details.login}
          onChange={handleChangeLogin}
        />
        <FormTextField
          label="Пароль"
          name="password"
          value={password || '*****'}
          type="password"
          onChange={handleChangePassword}
        />
        <FormTextField
          label="Телефон"
          name="phone"
          value={phone || details.phone}
          onChange={handleChangePhone}
        />
        <FormTextField
          label="Роль"
          name="access"
          value={access || details.access}
          onChange={handleChangeAccess}
        />
        <FormButtonSubmit value="Update" />
      </FormWrapper>
    </>
  );
}

Edit.defaultProps = {
  onGetDetails: null,
};
Edit.propTypes = {
  id: T.string.isRequired,
  onSubmit: T.func.isRequired,
  onGetById: T.func.isRequired,
  hideModal: T.func.isRequired,
  onGetDetails: T.shape({
    snp: T.string.isRequired,
    login: T.string.isRequired,
    phone: T.string.isRequired,
    access: T.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  onGetDetails: UserSelectors.getItemDetails(state),
});

const mapDispatchToProps = {
  onSubmit: UserOperations.updateUser,
  onGetById: UserOperations.getById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
