import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import { ActivityOperations } from '../../redux/activity';
import { ObjectOperations } from '../../redux/object';
import { PositionOperations } from '../../redux/position';
import Tabs from '../../components/Orders/Tabs';

function OrdersPage({ onSetActivities, onSetObjects, onSetPositions }) {
  useEffect(() => {
    onSetActivities();
    onSetObjects();
    onSetPositions();
  }, [onSetActivities, onSetObjects, onSetPositions]);
  return <Tabs />;
}
OrdersPage.propTypes = {
  onSetActivities: T.func.isRequired,
  onSetObjects: T.func.isRequired,
  onSetPositions: T.func.isRequired,
};
const mapDispatchToProps = {
  onSetActivities: ActivityOperations.getAll,
  onSetObjects: ObjectOperations.getAll,
  onSetPositions: PositionOperations.getAll,
};

export default connect(null, mapDispatchToProps)(OrdersPage);
