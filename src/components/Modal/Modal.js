import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import T from 'prop-types';
import { FormButtonClose } from '../Form';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  confirm: {
    display: 'flex',
    backgroundColor: '#00897b',
    color: '#fff',
    padding: '3px',
  },
  regect: {
    display: 'flex',
    backgroundColor: '#e53935',
    color: '#fff',
    padding: '3px',
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const TransitionsModal = ({ regect, children }) => {
  const classes = useStyles();
  const [open] = React.useState(true);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
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
