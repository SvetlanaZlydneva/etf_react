import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { OrderSelectors, OrderOperations } from '../../../redux/order';
import Title from '../../Title';
import orderStatus from '../../../helpers/orderStatus';
import Loader from '../../Loader';
import orderThead from '../../../helpers/orderThead';
import { TableThead, TableTbody } from '../../Table';
import { TableWrapper } from '../../Wrapper';
import { Bonus, Dismissal, Fine, Memo, Move, Recruit } from './DetailsTbody';
import styles from './Details.module.css';

function DetailsOrderPage({ id, onGetById, onGetDetails }) {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    onGetById(id);
    setDetails(onGetDetails);
  }, [id, onGetById, onGetDetails]);
  return !details ? (
    <Loader />
  ) : (
    <div className={styles.Details}>
      {details.category.en === 'bonus' && (
        <div className={styles.TopHeaderWrapper}>
          <div>
            {details.created}(
            {orderStatus.find(item => item.name === details.status).title})
          </div>
          <div className={styles.Header}>Наталья Анатольевна</div>
        </div>
      )}
      {details.category.en === 'fine' && (
        <div className={styles.TopHeaderWrapper}>
          <div>
            от {details.created} -{' '}
            {orderStatus.find(item => item.name === details.status).title}
          </div>
          <div className={styles.Header} />
        </div>
      )}
      <Title
        title={`№ ${details.number} ${details.activity} ${details.category.ru}`}
        option={2}
      />
      {/* <Title title={details.activity} option={2} /> */}
      <Title
        title={`от ${details.created} ${
          orderStatus.find(item => item.name === details.status).title
        }`}
        option={3}
      />
      {details.category.en !== 'memo' && (
        <TableWrapper>
          <TableThead>
            <tr>
              {orderThead[details.category.en].map(item => (
                <th key={item.key}>{item.name}</th>
              ))}
            </tr>
          </TableThead>
          <TableTbody>
            {details.body.map(item => (
              <tr key={uuidv4()}>
                {details.category.en === 'bonus' && <Bonus item={item} />}
                {details.category.en === 'dismissal' && (
                  <Dismissal item={item} />
                )}
                {details.category.en === 'fine' && <Fine item={item} />}
                {details.category.en === 'move' && <Move item={item} />}
                {details.category.en === 'recruit' && <Recruit item={item} />}
              </tr>
            ))}
          </TableTbody>
        </TableWrapper>
      )}
      {details.category.en === 'memo' && <Memo item={details.body} />}
      {details.total && (
        <div className={styles.Total}>Сумма : {details.total}</div>
      )}
      <div className={styles.Footer}>
        <div>Автор : {details.author}</div>
        {details.category.en === 'bonus' && (
          <div className={styles.HeaderWrapper}>
            <div className={styles.Header}>{details.head}</div>
          </div>
        )}
        {details.category.en === 'fine' && (
          <div className={styles.HeaderWrapper}>
            <div className={styles.Header}>{details.head}</div>
          </div>
        )}
        {details.category.en === 'memo' && (
          <div className={styles.HeaderWrapper}>
            <div className={styles.Header}>{details.head}</div>
          </div>
        )}
        {details.category.en === 'recruit' && (
          <div className={styles.HeaderWrapper}>
            <div className={styles.Header}>
              Документ(-ы) на хранении, ФИО, Подпись
            </div>
          </div>
        )}
        {details.category.en === 'move' && (
          <div className={styles.HeaderWrapper}>
            <div className={styles.Header}>
              Документ(-ы) на хранении, ФИО, Подпись
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

DetailsOrderPage.defaultProps = {
  onGetDetails: {
    total: null,
  },
};

DetailsOrderPage.propTypes = {
  id: T.string.isRequired,
  onGetById: T.func.isRequired,
  onGetDetails: T.shape({
    number: T.number.isRequired,
    category: T.objectOf(T.string).isRequired,
    activity: T.string.isRequired,
    created: T.number.isRequired,
    status: T.string.isRequired,
    author: T.string.isRequired,
    head: T.string.isRequired,
    body: T.arrayOf(T.objectOf(T.string)).isRequired,
    total: T.string,
  }),
};

const mapStateToProps = state => ({
  onGetDetails: OrderSelectors.getItemDetails(state),
});

const mapDispatchToProps = {
  onGetById: OrderOperations.getById,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsOrderPage);
