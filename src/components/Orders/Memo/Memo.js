import React, { useState } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';
import {
  FormWrapper,
  FormTextareaMemo,
  FormSelect,
  FormButtonSubmit,
} from '../../Form';
import Title from '../../Title';
import { WrapperElement } from '../../Wrapper';
import { OrderOperations } from '../../../redux/order';
import { ActivitySelectors } from '../../../redux/activity';
import { UserSelectors } from '../../../redux/user';
import PreSubmit from '../PreSubmit';

function Memo({ onSubmit, onGetActivities, onGetAuthor, redirect }) {
  const [activity, setActivity] = useState('');
  const [category] = useState({
    en: 'memo',
    ru: 'Служебная Записка, Заявление',
  });
  const [head, setHead] = useState('');
  const initBody = {
    note: '',
  };
  const [body, setBody] = useState([initBody]);
  const [preSubmit, setPreSubmit] = useState(false);
  const handleChangeActivity = event => {
    setActivity(event.target.value);
    setHead(
      onGetActivities
        .filter(item => item.name === event.target.value)
        .map(item => item.head)
        .toString(),
    );
  };
  const handleChangeBody = (event, index) => {
    const { name, value } = event.currentTarget;
    setBody(prevState => {
      const newBody = prevState;
      newBody[index][name] = value;
      return [...newBody];
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
            <WrapperElement key={index}>
              <FormTextareaMemo
                name="note"
                value={item.note}
                label="Содержание"
                onChange={event => handleChangeBody(event, index)}
              />
            </WrapperElement>
          );
        })}
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

Memo.propTypes = {
  onSubmit: T.func.isRequired,
  onGetActivities: T.arrayOf(String).isRequired,
  onGetAuthor: T.string.isRequired,
  redirect: T.func.isRequired,
};
const mapStateToProps = state => ({
  onGetActivities: ActivitySelectors.getAllActivities(state),
  onGetAuthor: UserSelectors.getLogin(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: order => dispatch(OrderOperations.createOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Memo);
