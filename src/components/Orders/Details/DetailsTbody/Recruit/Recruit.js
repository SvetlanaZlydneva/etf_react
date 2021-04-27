import React from 'react';
import T from 'prop-types';
import moment from 'moment';

const DetailsTbody = ({ item }) => (
  <>
    <td>
      <p>{item.surname}</p>
      <p>{item.name}</p>
      <p>{item.patronymic}</p>
    </td>
    <td>
      <p>{moment(item.date).format('DD-MM-yyyy')}</p>
      <p>{item.position}</p>
      <p>{item.object}</p>
    </td>
    <td>
      <p>ИНН : {item.identificationNumber}</p>
      <p>
        Паспорт : {item.passportSeriesAndNumber} выдан {item.passportIssuedBy}{' '}
        {moment(item.passportDateOfIssue).format('DD-MM-yyyy')}
      </p>
      <p>Адрес : {item.address}</p>
    </td>
    <td>
      <p>ДР : {moment(item.birthday).format('DD-MM-yyyy')}</p>
      <p>{item.phone}</p>
      {item.note && <p>{item.note}</p>}
    </td>
  </>
);

DetailsTbody.propTypes = {
  item: T.objectOf(T.string).isRequired,
};

export default DetailsTbody;
