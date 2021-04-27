import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import AvTimerOutlinedIcon from '@material-ui/icons/AvTimerOutlined';
import paths from '../../routes/route.paths';

const { base } = paths;

export default [
  {
    key: uuidv4(),
    title: 'Приказы',
    path: base.orders,
    image: <BorderColorOutlinedIcon fontSize="large" />,
    user: true,
    admin: true,
  },
  {
    key: uuidv4(),
    title: 'Инвентаризации',
    path: base.inventory,
    image: <AssignmentOutlinedIcon fontSize="large" />,
    user: true,
    admin: true,
  },
  {
    key: uuidv4(),
    title: 'Табель',
    path: base.timeSheet,
    image: <AvTimerOutlinedIcon fontSize="large" />,
    user: true,
    admin: true,
  },
  {
    key: uuidv4(),
    title: 'Администратор',
    path: base.admin,
    image: <BuildOutlinedIcon fontSize="large" />,
    user: false,
    admin: true,
  },
];
