import { v4 as uuidv4 } from 'uuid';

export default {
  bonus: [
    { key: uuidv4(), name: 'ФИО' },
    { key: uuidv4(), name: 'Должность' },
    { key: uuidv4(), name: 'Сумма' },
    { key: uuidv4(), name: 'Основание' },
    { key: uuidv4(), name: 'Объект' },
  ],
  dismissal: [
    { key: uuidv4(), name: 'ФИО' },
    { key: uuidv4(), name: 'Дата' },
    { key: uuidv4(), name: 'Должность' },
    { key: uuidv4(), name: 'Объект' },
    { key: uuidv4(), name: 'Причина' },
    { key: uuidv4(), name: 'BlackList' },
  ],
  fine: [
    { key: uuidv4(), name: 'ФИО' },
    { key: uuidv4(), name: 'Должность' },
    { key: uuidv4(), name: 'Сумма' },
    { key: uuidv4(), name: 'Основание' },
    { key: uuidv4(), name: 'Объект' },
    { key: uuidv4(), name: 'Дата погашения' },
  ],
  move: [
    { key: uuidv4(), name: 'ФИО' },
    { key: uuidv4(), name: 'Дата' },
    { key: uuidv4(), name: 'С Должность-Объект' },
    { key: uuidv4(), name: 'На Должность-Объект' },
  ],
  recruit: [
    { key: uuidv4(), name: 'ФИО' },
    { key: uuidv4(), name: 'Принять : ' },
    { key: uuidv4(), name: 'Паспортные Данные' },
    { key: uuidv4(), name: 'Личные Данные' },
  ],
};
