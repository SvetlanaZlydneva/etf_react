import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import moment from 'moment';
import {
  FormWrapper,
  FormTextField,
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

function Move({
  onSubmit,
  onGetObjects,
  onGetActivities,
  onGetPositions,
  onGetAuthor,
  redirect,
}) {
  const [activity, setActivity] = useState('');
  const [category] = useState({ en: 'move', ru: 'Перевод' });
  const [head, setHead] = useState('');
  const initBody = {
    snp: '',
    date: moment().format('yyyy-MM-DD'),
    oldPosition: '',
    oldObject: '',
    newPosition: '',
    newObject: '',
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
            <WrapperGroupeElements key={index}>
              <FormTextField
                name="snp"
                value={item.snp}
                label="ФИО"
                onChange={event => handleChangeBody(event, index)}
              />
              <FormTextField
                name="date"
                type="date"
                value={item.date}
                label="Перевести с"
                onChange={event => handleChangeBody(event, index)}
              />
              <FormSelect
                name="oldPosition"
                value={item.oldPosition}
                label="С Должности"
                onChange={event => handleChangeBody(event, index)}
                items={onGetPositions}
              />
              <FormSelect
                name="oldObject"
                value={item.oldObject}
                label="С Объекта"
                onChange={event => handleChangeBody(event, index)}
                items={onGetObjects}
              />
              <FormSelect
                name="newPosition"
                value={item.newPosition}
                label="На Должность"
                onChange={event => handleChangeBody(event, index)}
                items={onGetPositions}
              />
              <FormSelect
                name="newObject"
                value={item.newObject}
                label="На Объект"
                onChange={event => handleChangeBody(event, index)}
                items={onGetObjects}
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

Move.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Move);
