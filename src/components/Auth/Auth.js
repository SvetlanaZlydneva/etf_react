import React, { useState } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { UserOperations } from '../../redux/user';
import { FormWrapper, FormButtonSubmit, FormTextField } from '../Form';
import styles from './Auth.module.css';

function AuthForm({ onSubmit }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  function reset() {
    setLogin('');
    setPassword('');
  }
  const handleChangeLogin = event => {
    setLogin(event.target.value);
  };
  const handleChangePassword = event => {
    setPassword(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ login, password });
    reset();
  };

  return (
    <div className={styles.Wrapper}>
      <FormWrapper onSubmit={handleSubmit}>
        <FormTextField
          label="Login"
          name="login"
          value={login}
          onChange={handleChangeLogin}
        />
        <FormTextField
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
        <FormButtonSubmit value="Sing In" />
      </FormWrapper>
    </div>
  );
}

AuthForm.propTypes = {
  onSubmit: T.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: user => dispatch(UserOperations.login(user)),
});

export default connect(null, mapDispatchToProps)(AuthForm);
