import React, { useState } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { FormWrapper, FormTextField, FormButtonSubmit } from '../../../Form';
import { ActivityOperations } from '../../../../redux/activity';

function Create({ onSubmit, hideModal }) {
  const [name, setName] = useState('');
  const [head, setHead] = useState('');
  const [signature, setSignature] = useState('');
  const [processes, setProcesses] = useState('');
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
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, head, signature, processes });
    hideModal();
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTextField
        label="Подразделение"
        name="name"
        value={name}
        onChange={handleChangeName}
      />
      <FormTextField
        label="Руководитель"
        name="head"
        value={head}
        onChange={handleChangeHead}
      />
      <FormTextField
        label="Подписывает"
        name="signature"
        value={signature}
        onChange={handleChangeSignature}
      />
      <FormTextField
        label="Обрабатывает"
        name="processes"
        value={processes}
        onChange={handleChangeProcesses}
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
  onSubmit: ActivityOperations.createActivity,
};

export default connect(null, mapDispatchToProps)(Create);
