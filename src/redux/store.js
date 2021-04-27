import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { UserReducer } from './user';
import { ObjectReducer } from './object';
import { ActivityReducer } from './activity';
import { PositionReducer } from './position';
import { OrderReducer } from './order';
import { ErrorReducer } from './error';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const userPersistConfig = {
  key: 'users',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    users: persistReducer(userPersistConfig, UserReducer),
    errors: ErrorReducer,
    objects: ObjectReducer,
    activities: ActivityReducer,
    positions: PositionReducer,
    orders: OrderReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
