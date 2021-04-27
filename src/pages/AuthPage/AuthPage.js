import React from 'react';
import Particles from 'react-particles-js';
import styles from './AuthPage.module.css';
import particlesParams from '../../helpers/particlesParams';
import AuthForm from '../../components/Auth';

const AuthPage = () => (
  <div className={styles.Wrapper}>
    <Particles params={particlesParams} />
    <AuthForm />
  </div>
);

export default AuthPage;
