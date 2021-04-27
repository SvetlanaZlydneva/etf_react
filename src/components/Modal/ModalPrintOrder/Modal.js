import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import T from 'prop-types';
import { FormButtonClose } from '../../Form';
import styles from './Modal.module.css';

const TransitionsModal = ({ regect, children }) => {
  const [open] = React.useState(true);

  return (
    <Modal
      className={styles.Modal}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open} className={styles.Fade}>
        <div>
          <FormButtonClose onClick={regect} />
          {children}
        </div>
      </Fade>
    </Modal>
  );
};

TransitionsModal.propTypes = {
  regect: T.func.isRequired,
  children: T.node.isRequired,
};

export default TransitionsModal;
