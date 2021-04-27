import React, { useState } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { OrderOperations } from '../../../../redux/order';
import orderStatus from '../../../../helpers/orderStatus';
import styles from './Status.module.css';

function ChangeStatus({ currentValue, id, onChange, access }) {
  const [items] = useState({
    registered: {
      name: 'registered',
      title: 'Зарегистрирован',
    },
    approved: {
      name: 'approved',
      title: 'Утвержден',
    },
    rejected: {
      name: 'rejected',
      title: 'Отклонен',
    },
    processed: {
      name: 'processed',
      title: 'Обработан',
    },
  });
  const handleChangeRegistered = () => {
    onChange(id, { status: items.registered.name });
  };
  const handleChangeApproved = () => {
    onChange(id, { status: items.approved.name });
  };
  const handleChangeRejected = () => {
    onChange(id, { status: items.rejected.name });
  };
  const handleChangeProcessed = () => {
    onChange(id, { status: items.processed.name });
  };
  return (
    <div className={styles.List}>
      {access === 'admin' && currentValue !== items.processed.name && (
        <button
          className={styles.Processed}
          type="button"
          onClick={handleChangeProcessed}
          title={items.processed.title}
        >
          {orderStatus.find(item => item.name === items.processed.name).image}
        </button>
      )}
      {currentValue !== items.approved.name && (
        <button
          className={styles.Approved}
          type="button"
          onClick={handleChangeApproved}
          title={items.approved.title}
        >
          {orderStatus.find(item => item.name === items.approved.name).image}
        </button>
      )}
      {currentValue !== items.registered.name && (
        <button
          className={styles.Registered}
          type="button"
          onClick={handleChangeRegistered}
          title={items.registered.title}
        >
          {orderStatus.find(item => item.name === items.registered.name).image}
        </button>
      )}
      {currentValue !== items.rejected.name && (
        <button
          className={styles.Rejected}
          type="button"
          onClick={handleChangeRejected}
          title={items.rejected.title}
        >
          {orderStatus.find(item => item.name === items.rejected.name).image}
        </button>
      )}
    </div>
  );
}

ChangeStatus.propTypes = {
  currentValue: T.string.isRequired,
  id: T.string.isRequired,
  onChange: T.func.isRequired,
  access: T.string.isRequired,
};

const mapDispatchToProps = {
  onChange: OrderOperations.updateOrder,
};

export default connect(null, mapDispatchToProps)(ChangeStatus);
