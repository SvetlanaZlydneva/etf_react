import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import {
  PositionOperations,
  PositionSelectors,
} from '../../../../redux/position';
import { TableThead, TableTbody } from '../../../Table';
import { TableWrapper } from '../../../Wrapper';
import { ButtonDelete, ButtonEdit } from '../../../Buttons';
import Edit from '../Edit';
import Modal from '../../../Modal';

function List({ onGetAll, onDelete, onGetItems }) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);
  useEffect(() => {
    onGetAll();
  }, [onGetAll]);
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
            <th>delete</th>
          </tr>
        </TableThead>
        <TableTbody>
          {onGetItems.map(({ _id, name }) => (
            <tr key={_id}>
              <td>
                <ButtonEdit onClick={() => handleChangeId(_id)} />
              </td>
              <td>{name}</td>
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
};

const mapStateToProps = state => ({
  onGetItems: PositionSelectors.getAllPositions(state),
});

const mapDispatchToProps = {
  onGetAll: PositionOperations.getAll,
  onDelete: PositionOperations.deletePosition,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
