import React, { useState } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import {
  FormWrapper,
  FormTextField,
  FormSelect,
  FormButtonSubmit,
} from '../../../Form';
import { ActivitySelectors } from '../../../../redux/activity';
import { ObjectOperations } from '../../../../redux/object';

function Create({ onSubmit, hideModal, onGetItems }) {
  const [name, setName] = useState('');
  const [parent, setParent] = useState('');
  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeParent = event => {
    setParent(event.target.value);
  };
  function reset() {
    setName('');
    setParent('');
  }
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, parent });
    hideModal();
    reset();
  };
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormSelect
        label="Вид Деятельности"
        name="parent"
        value={parent}
        onChange={handleChangeParent}
        items={onGetItems}
      />
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
  onGetItems: T.arrayOf(String).isRequired,
};

const mapStateToProps = state => ({
  onGetItems: ActivitySelectors.getAllActivities(state),
});

const mapDispatchToProps = {
  onSubmit: ObjectOperations.createObject,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
