import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { FormWrapper, FormTextField, FormButtonSubmit } from '../../../Form';
import {
  PositionOperations,
  PositionSelectors,
} from '../../../../redux/position';
import Loader from '../../../Loader';
import Notification from '../../../Notification';

function Edit({ id, onGetById, onGetDetails, onSubmit, hideModal }) {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    onGetById(id);
    setDetails(onGetDetails);
  }, [id, onGetById, onGetDetails]);
  const handleChangeName = event => {
    setName(event.target.value);
  };
  function reset() {
    setName('');
  }
  function check() {
    return name;
  }
  function prepare() {
    const credentials = {};
    if (name) credentials.name = name;
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
  }),
};

const mapStateToProps = state => ({
  onGetDetails: PositionSelectors.getItemDetails(state),
});

const mapDispatchToProps = {
  onSubmit: PositionOperations.updatePosition,
  onGetById: PositionOperations.getById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
