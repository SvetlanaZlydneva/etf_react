import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { FormWrapper, FormTextField, FormButtonSubmit } from '../../../Form';
import {
  ActivityOperations,
  ActivitySelectors,
} from '../../../../redux/activity';
import Loader from '../../../Loader';
import Notification from '../../../Notification';

function Edit({ id, onGetById, onGetDetails, onSubmit, hideModal }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [head, setHead] = useState('');
  const [signature, setSignature] = useState('');
  const [processes, setProcesses] = useState('');
  useEffect(() => {
    onGetById(id);
    setDetails(onGetDetails);
  }, [id, onGetById, onGetDetails]);
  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeHead = event => {
    setHead(event.target.value);
  };
  const handleChangeSignature = event => {
    setSignature(event.target.value);
  };
  const handleChangeProcesses = event => {
    setProcesses(event.target.value);
  };
  function reset() {
    setHead('');
    setName('');
    setSignature('');
    setProcesses('');
  }
  function check() {
    return name || head || signature || processes;
  }
  function prepare() {
    const credentials = {};
    if (name) credentials.name = name;
    if (head) credentials.head = head;
    if (signature) credentials.signature = signature;
    if (processes) credentials.processes = processes;
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
          label="Подразделение"
          name="name"
          value={name || details.name}
          onChange={handleChangeName}
        />
        <FormTextField
          label="Руководитель"
          name="head"
          value={head || details.head}
          onChange={handleChangeHead}
        />
        <FormTextField
          label="Подписывает"
          name="signature"
          value={signature || details.signature}
          onChange={handleChangeSignature}
        />
        <FormTextField
          label="Обрабатывает"
          name="processes"
          value={processes || details.processes}
          onChange={handleChangeProcesses}
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
    name: T.string.isRequired,
    head: T.string.isRequired,
    signature: T.string.isRequired,
    processes: T.string.isRequired,
  }),
};

const mapStateToProps = state => ({
  onGetDetails: ActivitySelectors.getItemDetails(state),
});

const mapDispatchToProps = {
  onSubmit: ActivityOperations.updateActivity,
  onGetById: ActivityOperations.getById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
