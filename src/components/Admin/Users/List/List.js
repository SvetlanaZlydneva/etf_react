import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { UserOperations, UserSelectors } from '../../../../redux/user';
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
            <th>access</th>
            <th>login</th>
            <th>snp</th>
            <th>phone</th>
            <th>delete</th>
          </tr>
        </TableThead>
        <TableTbody>
          {onGetItems.map(({ _id, access, login, snp, phone }) => (
            <tr key={_id}>
              <td>
                <ButtonEdit onClick={() => handleChangeId(_id)} />
              </td>
              <td>{access}</td>
              <td>{login}</td>
              <td>{snp}</td>
              <td>{phone}</td>
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
  onGetItems: UserSelectors.getAllUsers(state),
});

const mapDispatchToProps = {
  onGetAll: UserOperations.getAll,
  onDelete: UserOperations.deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
