import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import moment from 'moment';
import {
  FormWrapper,
  FormTextField,
  FormTextarea,
  FormSelect,
  FormButtonSubmit,
} from '../../Form';
import { ButtonClose, ButtonAdd } from '../../Buttons';
import Title from '../../Title';
import { WrapperElement, WrapperGroupeForm } from '../../Wrapper';
import { OrderOperations } from '../../../redux/order';
import { ObjectSelectors } from '../../../redux/object';
import { ActivitySelectors } from '../../../redux/activity';
import { PositionSelectors } from '../../../redux/position';
import { UserSelectors } from '../../../redux/user';
import PreSubmit from '../PreSubmit';

function Recruit({
  onSubmit,
  onGetObjects,
  onGetActivities,
  onGetPositions,
  onGetAuthor,
  redirect,
}) {
  const [activity, setActivity] = useState('');
  const [category] = useState({ en: 'recruit', ru: 'Прием' });
  const [head, setHead] = useState('');
  const initBody = {
    surname: '',
    name: '',
    patronymic: '',
    date: moment().format('yyyy-MM-DD'),
    position: '',
    object: '',
    birthday: moment().format('yyyy-MM-DD'),
    address: '',
    phone: '',
    identificationNumber: '',
    passportSeriesAndNumber: '',
    passportDateOfIssue: moment().format('yyyy-MM-DD'),
    passportIssuedBy: '',
    note: '',
  };
  const [body, setBody] = useState([initBody]);
  const [preSubmit, setPreSubmit] = useState(false);
  const [upload, setUpload] = useState(false);
  const handleChangeActivity = event => {
    setActivity(event.target.value);
    setHead(
      onGetActivities
        .filter(item => item.name === event.target.value)
        .map(item => item.head)
        .toString(),
    );
  };
  // eslint-disable-next-line
  useEffect(() => {
    setUpload(true);
  });
  const handleChangeBody = (event, index) => {
    const { name, value } = event.currentTarget;
    setBody(prevState => {
      const newBody = prevState;
      newBody[index][name] = value;
      return [...newBody];
    });
  };
  const handleAdd = () => {
    setBody([...body, initBody]);
  };
  const handleDelete = key => {
    setBody(prevState => {
      const newBody = prevState.filter((_, index) => {
        return index !== key;
      });
      return newBody;
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ activity, category, head, body, author: onGetAuthor });
    setPreSubmit(!preSubmit);
    redirect();
  };
  const handlePreSubmit = event => {
    event.preventDefault();
    setPreSubmit(!preSubmit);
  };

  return (
    <>
      <Title title={category.ru} option={2} />
      <Title title={`Руководитель : ${head}`} option={3} />
      <FormWrapper onSubmit={handlePreSubmit} width={100} units="%">
        <WrapperElement>
          <FormSelect
            name="activity"
            value={activity}
            label="Вид Деятельности"
            onChange={handleChangeActivity}
            items={onGetActivities}
          />
        </WrapperElement>
        {body.map((item, index) => {
          return (
            // eslint-disable-next-line
            <div key={index}>
              <WrapperGroupeForm>
                <FormTextField
                  name="surname"
                  value={item.surname}
                  label="Фамилия"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormTextField
                  name="name"
                  value={item.name}
                  label="Имя"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormTextField
                  name="patronymic"
                  value={item.patronymic}
                  label="Отчество"
                  onChange={event => handleChangeBody(event, index)}
                />
              </WrapperGroupeForm>
              <WrapperGroupeForm>
                <FormTextField
                  name="date"
                  type="date"
                  value={item.date}
                  label="Принять с"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormSelect
                  name="position"
                  value={item.position}
                  label="Должность"
                  onChange={event => handleChangeBody(event, index)}
                  items={onGetPositions}
                />
                <FormSelect
                  name="object"
                  value={item.object}
                  label="Объект"
                  onChange={event => handleChangeBody(event, index)}
                  items={onGetObjects}
                />
              </WrapperGroupeForm>
              <WrapperGroupeForm>
                <FormTextField
                  name="birthday"
                  type="date"
                  value={item.birthday}
                  label="Дата Рождения"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormTextField
                  name="address"
                  value={item.address}
                  label="Адрес"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormTextField
                  name="phone"
                  value={item.phone}
                  label="Телефон"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormTextField
                  name="identificationNumber"
                  value={item.identificationNumber}
                  label="ИНН"
                  onChange={event => handleChangeBody(event, index)}
                />
              </WrapperGroupeForm>
              <WrapperGroupeForm>
                <FormTextField
                  name="passportSeriesAndNumber"
                  value={item.passportSeriesAndNumber}
                  label="Серия и № Паспорта"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormTextField
                  name="passportDateOfIssue"
                  type="date"
                  value={item.passportDateOfIssue}
                  label="Паспорт выдан"
                  onChange={event => handleChangeBody(event, index)}
                />
                <FormTextField
                  name="passportIssuedBy"
                  value={item.passportIssuedBy}
                  label="Кем Выдан"
                  onChange={event => handleChangeBody(event, index)}
                />

                <FormTextarea
                  name="note"
                  value={item.note}
                  label="Дополнительная информация"
                  required={false}
                  onChange={event => handleChangeBody(event, index)}
                />
              </WrapperGroupeForm>
              <ButtonClose onClick={() => handleDelete(index)} />
            </div>
          );
        })}
        {upload && <ButtonAdd onClick={handleAdd} />}
        <WrapperElement>
          <FormButtonSubmit value="Зарегистрировать" />
        </WrapperElement>
      </FormWrapper>
      {preSubmit && (
        <PreSubmit regect={handlePreSubmit} confirm={handleSubmit} />
      )}
    </>
  );
}

Recruit.propTypes = {
  onSubmit: T.func.isRequired,
  onGetObjects: T.arrayOf(String).isRequired,
  onGetActivities: T.arrayOf(String).isRequired,
  onGetPositions: T.arrayOf(String).isRequired,
  onGetAuthor: T.string.isRequired,
  redirect: T.func.isRequired,
};
const mapStateToProps = state => ({
  onGetObjects: ObjectSelectors.getAllObjects(state),
  onGetActivities: ActivitySelectors.getAllActivities(state),
  onGetPositions: PositionSelectors.getAllPositions(state),
  onGetAuthor: UserSelectors.getLogin(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: order => dispatch(OrderOperations.createOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recruit);
