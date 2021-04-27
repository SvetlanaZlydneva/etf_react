import React from 'react';
import T from 'prop-types';
import moment from 'moment';

const DetailsTbody = ({ item }) => (
  <>
    <td>{item.snp}</td>
    <td>{moment(item.date).format('DD-MM-yyyy')}</td>
    <td>{item.position}</td>
    <td>{item.object}</td>
    <td>{item.note}</td>
    <td>{item.blackList}</td>
  </>
);

DetailsTbody.propTypes = {
  item: T.objectOf(T.string).isRequired,
};

export default DetailsTbody;
