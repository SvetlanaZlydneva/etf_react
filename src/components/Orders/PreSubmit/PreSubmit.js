import React from 'react';
import T from 'prop-types';
import styles from './PreSubmit.module.css';
import Modal from '../../Modal';
import { ButtonConfirm, ButtonRegect } from '../../Buttons';

const PreSubmit = ({ confirm, regect }) => (
  <Modal regect={regect}>
    <div className={styles.Title}>Уверены?</div>
    <div className={styles.BtnGroupe}>
      <ButtonConfirm onClick={confirm} />
      <ButtonRegect onClick={regect} />
    </div>
  </Modal>
);

PreSubmit.propTypes = {
  confirm: T.func.isRequired,
  regect: T.func.isRequired,
};

export default PreSubmit;
