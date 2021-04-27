import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { OrderSelectors, OrderOperations } from '../../../redux/order';
import { UserSelectors } from '../../../redux/user';
import { TableThead, TableTbody } from '../../Table';
import { TableWrapper } from '../../Wrapper';
import RegistryBody from './RegistryBody';
import orderStatus from '../../../helpers/orderStatus';
import styles from './Registry.module.css';
import Loader from '../../Loader';
import Status from './Status';
import Modal from '../../Modal/ModalPrintOrder';
import { ButtonDetails } from '../../Buttons';
import Details from '../Details';

function Registry({ onGetAll, onGetAccess, onGetItems }) {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(null);
  useEffect(() => {
    onGetAll();
  }, [onGetAll]);
  const handleChangeShowModal = () => {
    setShowModal(!showModal);
  };
  const handleShowDetails = _id => {
    setId(_id);
    handleChangeShowModal();
  };
  return onGetItems.length === 0 ? (
    <Loader />
  ) : (
    <>
      <TableWrapper width={100}>
        <TableThead>
          <tr>
            <th>№</th>
            <th>Статус</th>
            <th>Категория</th>
            <th>Вид Деятельности</th>
            <th>Содержание</th>
            <th>Создан</th>
          </tr>
        </TableThead>
        <TableTbody>
          {onGetItems.map(
            ({
              _id,
              created,
              status,
              body,
              activity,
              total,
              category,
              author,
              number,
            }) => (
              <tr
                key={_id}
                title={orderStatus.find(item => item.name === status).title}
              >
                <td>
                  <div className={styles.TableItem}>
                    {number}
                    <ButtonDetails onClick={() => handleShowDetails(_id)} />
                  </div>
                </td>
                {onGetAccess === 'user' ? (
                  <td>
                    {orderStatus.find(item => item.name === status).image}
                  </td>
                ) : (
                  <td className={styles.Status}>
                    <div className={styles.TableItem}>
                      {orderStatus.find(item => item.name === status).image}
                      {status !== 'processed' && (
                        <Status
                          currentValue={status}
                          id={_id}
                          access={onGetAccess}
                        />
                      )}
                    </div>
                  </td>
                )}
                <td>{category.ru}</td>
                <td>{activity}</td>
                <td>
                  <RegistryBody items={body} />
                  {total && <p className={styles.Total}>{total}</p>}
                </td>
                <td>
                  <p>{author}</p>
                  <p>{created}</p>
                </td>
              </tr>
            ),
          )}
        </TableTbody>
      </TableWrapper>
      {showModal && id && (
        <Modal regect={handleChangeShowModal}>
          <Details id={id} />
        </Modal>
      )}
    </>
  );
}

Registry.propTypes = {
  onGetAll: T.func.isRequired,
  onGetAccess: T.string.isRequired,
  onGetItems: T.arrayOf(String).isRequired,
};

const mapStateToProps = state => ({
  onGetItems: OrderSelectors.getAllOrders(state),
  onGetAccess: UserSelectors.getAccess(state),
});

const mapDispatchToProps = {
  onGetAll: OrderOperations.getAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registry);
