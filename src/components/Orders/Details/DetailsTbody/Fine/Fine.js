import React from 'react';
import T from 'prop-types';
import moment from 'moment';

const DetailsTbody = ({ item }) => (
  <>
    <td>{item.snp}</td>
    <td>{item.position}</td>
    <td>{item.sum}</td>
    <td>{item.note}</td>
    <td>{item.object}</td>
    <td>{moment(item.date).format('DD-MM-yyyy')}</td>
  </>
);

DetailsTbody.propTypes = {
  item: T.objectOf(T.string).isRequired,
};

export default DetailsTbody;
