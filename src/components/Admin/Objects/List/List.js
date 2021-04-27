import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { ObjectOperations, ObjectSelectors } from '../../../../redux/object';
import { ActivityOperations } from '../../../../redux/activity';
import { TableThead, TableTbody } from '../../../Table';
import { TableWrapper } from '../../../Wrapper';
import { ButtonDelete, ButtonEdit } from '../../../Buttons';
import Edit from '../Edit';
import Modal from '../../../Modal';

function List({ onGetAll, onDelete, onGetItems, onGetActivity }) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);
  useEffect(() => {
    onGetAll();
    onGetActivity();
  }, [onGetAll, onGetActivity]);
  const handleChangeShowModal = () => {
    setShowModal(!showModal);
  };
  const handleChangeId = _id => {
    setId(_id);
    handleChangeShowModal();
  };

  return (
    <>
      <TableWrapper>
        <TableThead>
          <tr>
            <th>edit</th>
            <th>name</th>
            <th>parent</th>
            <th>delete</th>
          </tr>
        </TableThead>
        <TableTbody>
          {onGetItems.map(({ _id, name, parent }) => (
            <tr key={_id}>
              <td>
                <ButtonEdit onClick={() => handleChangeId(_id)} />
              </td>
              <td>{name}</td>
              <td>{parent}</td>
              <td>
                <ButtonDelete onClick={() => onDelete(_id)} />
              </td>
            </tr>
          ))}
        </TableTbody>
      </TableWrapper>
      {showModal && id && (
        <Modal regect={handleChangeShowModal}>
          <Edit hideModal={handleChangeShowModal} id={id} />
        </Modal>
      )}
    </>
  );
}

List.propTypes = {
  onGetAll: T.func.isRequired,
  onDelete: T.func.isRequired,
  onGetItems: T.arrayOf(String).isRequired,
  onGetActivity: T.func.isRequired,
};

const mapStateToProps = state => ({
  onGetItems: ObjectSelectors.getAllObjects(state),
});

const mapDispatchToProps = {
  onGetAll: ObjectOperations.getAll,
  onDelete: ObjectOperations.deleteObject,
  onGetActivity: ActivityOperations.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
