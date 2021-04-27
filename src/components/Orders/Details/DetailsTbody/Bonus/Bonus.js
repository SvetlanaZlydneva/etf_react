import React from 'react';
import T from 'prop-types';

const DetailsTbody = ({ item }) => (
  <>
    <td>{item.snp}</td>
    <td>{item.position}</td>
    <td>{item.sum}</td>
    <td>{item.note}</td>
    <td>{item.object}</td>
  </>
);

DetailsTbody.propTypes = {
  item: T.objectOf(T.string).isRequired,
};

export default DetailsTbody;
