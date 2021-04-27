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
import { WrapperElement, WrapperGroupeElements } from '../../Wrapper';
import { OrderOperations } from '../../../redux/order';
import { ObjectSelectors } from '../../../redux/object';
import { ActivitySelectors } from '../../../redux/activity';
import { PositionSelectors } from '../../../redux/position';
import { UserSelectors } from '../../../redux/user';
import PreSubmit from '../PreSubmit';

function Fine({
  onSubmit,
  onGetObjects,
  onGetActivities,
  onGetPositions,
  onGetAuthor,
  redirect,
}) {
  const [activity, setActivity] = useState('');
  const [category] = useState({ en: 'fine', ru: 'Штраф' });
  const [head, setHead] = useState('');
  const initBody = {
    snp: '',
    position: '',
    sum: '',
    note: '',
    object: '',
    date: moment().format('yyyy-MM-DD'),
  };
  const [body, setBody] = useState([initBody]);
  const [total, setTotal] = useState(0);
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
      newBody[index][name] = name === 'sum' ? value.replace(',', '.') : value;
      if (name === 'sum')
        setTotal(newBody.reduce((sum, item) => sum + +item.sum, 0).toFixed(2));
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
      setTotal(newBody.reduce((sum, item) => sum + +item.sum, 0).toFixed(2));
      return newBody;
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ activity, total, category, head, body, author: onGetAuthor });
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
      <Title title={`Сумма : ${total}`} option={3} />
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
            <WrapperGroupeElements key={index}>
              <FormTextField
                name="snp"
                value={item.snp}
                label="ФИО"
                onChange={event => handleChangeBody(event, index)}
              />
              <FormSelect
                name="position"
                value={item.position}
                label="Должность"
                onChange={event => handleChangeBody(event, index)}
                items={onGetPositions}
              />
              <FormTextField
                name="sum"
                value={item.sum}
                label="Сумма"
                type="number"
                onChange={event => handleChangeBody(event, index)}
              />
              <FormTextarea
                name="note"
                value={item.note}
                label="Основание"
                onChange={event => handleChangeBody(event, index)}
              />
              <FormSelect
                name="object"
                value={item.object}
                label="Объект"
                onChange={event => handleChangeBody(event, index)}
                items={onGetObjects}
              />
              <FormTextField
                name="date"
                type="date"
                value={item.date}
                label="Дата погашения"
                onChange={event => handleChangeBody(event, index)}
              />
              <ButtonClose onClick={() => handleDelete(index)} />
            </WrapperGroupeElements>
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

Fine.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Fine);
