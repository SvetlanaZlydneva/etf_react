import React, { useState } from 'react';
import { AdminWrapper } from '../../Wrapper';
import List from './List';
import Create from './Create';
import { ButtonAdd } from '../../Buttons';
import Modal from '../../Modal';

function Positions() {
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showModal);
  };
  return (
    <AdminWrapper>
      <ButtonAdd
        onClick={handleChange}
        color="#3f51b5"
        margin="0 0 10px 0"
        description="Создать"
      />
      <List />
      {showModal && (
        <Modal regect={handleChange}>
          <Create hideModal={handleChange} />
        </Modal>
      )}
    </AdminWrapper>
  );
}

export default Positions;
