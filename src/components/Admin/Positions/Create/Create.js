import React, { useState } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { FormWrapper, FormTextField, FormButtonSubmit } from '../../../Form';
import { PositionOperations } from '../../../../redux/position';

function Create({ onSubmit, hideModal }) {
  const [name, setName] = useState('');
  const handleChangeName = event => {
    setName(event.target.value);
  };
  function reset() {
    setName('');
  }
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name });
    hideModal();
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTextField
        label="Название"
        name="name"
        value={name}
        onChange={handleChangeName}
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
  onSubmit: PositionOperations.createPosition,
};

export default connect(null, mapDispatchToProps)(Create);
