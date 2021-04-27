import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import {
  FormWrapper,
  FormTextField,
  FormButtonSubmit,
  FormSelect,
} from '../../../Form';
import { ObjectOperations, ObjectSelectors } from '../../../../redux/object';
import { ActivitySelectors } from '../../../../redux/activity';
import Loader from '../../../Loader';
import Notification from '../../../Notification';

function Edit({
  id,
  onGetById,
  onGetDetails,
  onSubmit,
  hideModal,
  onGetItems,
}) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [parent, setParent] = useState('');
  useEffect(() => {
    onGetById(id);
    setDetails(onGetDetails);
  }, [id, onGetById, onGetDetails]);
  const handleChangeName = event => {
    setName(event.target.value);
  };
  const handleChangeParent = event => {
    setParent(event.target.value);
  };
  function reset() {
    setParent('');
    setName('');
  }
  function check() {
    return name || parent;
  }
  function prepare() {
    const credentials = {};
    if (name) credentials.name = name;
    if (parent) credentials.parent = parent;
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
        <FormSelect
          label="Вид Деятельности"
          name="parent"
          value={parent || details.parent}
          onChange={handleChangeParent}
          items={onGetItems}
        />
        <FormTextField
          label="Название"
          name="name"
          value={name || details.name}
          onChange={handleChangeName}
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
    parent: T.string.isRequired,
  }),
  onGetItems: T.arrayOf(String).isRequired,
};

const mapStateToProps = state => ({
  onGetDetails: ObjectSelectors.getItemDetails(state),
  onGetItems: ActivitySelectors.getAllActivities(state),
});

const mapDispatchToProps = {
  onSubmit: ObjectOperations.updateObject,
  onGetById: ObjectOperations.getById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
