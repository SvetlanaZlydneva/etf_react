import React, { useState } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { FormWrapper, FormTextField, FormButtonSubmit } from '../../../Form';
import { UserOperations } from '../../../../redux/user';

function Create({ onSubmit, hideModal }) {
  const [snp, setSnp] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [access, setAccess] = useState('');
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
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ snp, login, password, phone, access });
    hideModal();
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTextField
        label="ФИО"
        name="snp"
        value={snp}
        onChange={handleChangeSnp}
      />
      <FormTextField
        label="Логин"
        name="login"
        value={login}
        onChange={handleChangeLogin}
      />
      <FormTextField
        label="Пароль"
        name="password"
        value={password}
        type="password"
        onChange={handleChangePassword}
      />
      <FormTextField
        label="Телефон"
        name="phone"
        value={phone}
        onChange={handleChangePhone}
      />
      <FormTextField
        label="Роль"
        name="access"
        value={access}
        onChange={handleChangeAccess}
      />
      <FormButtonSubmit value="Create" />
    </FormWrapper>
  );
}

Create.propTypes = {
  onSubmit: T.func.isRequired,
  hideModal: T.func.isRequired,
};

const mapDispatchToProps = {
  onSubmit: UserOperations.createUser,
};

export default connect(null, mapDispatchToProps)(Create);
