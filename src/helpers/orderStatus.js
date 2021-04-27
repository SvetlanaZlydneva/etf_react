import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ClearIcon from '@material-ui/icons/Clear';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default [
  {
    key: uuidv4(),
    name: 'registered',
    title: 'Зарегистрирован',
    image: <DoneAllIcon fontSize="large" style={{ color: '#9e9e9e' }} />,
  },
  {
    key: uuidv4(),
    name: 'approved',
    title: 'Утвержден',
    image: <DoneAllIcon fontSize="large" style={{ color: '#80cbc4' }} />,
  },
  {
    key: uuidv4(),
    name: 'rejected',
    title: 'Отклонен',
    image: <ClearIcon fontSize="large" style={{ color: '#ff8a80' }} />,
  },
  {
    key: uuidv4(),
    name: 'processed',
    title: 'Обработан',
    image: (
      <CheckCircleOutlineIcon fontSize="large" style={{ color: '#3f51b5' }} />
    ),
  },
];
