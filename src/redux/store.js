import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './userSlice';
import { contactsApi } from './contactsSlice';
import { combineReducers } from 'redux';
import { contactReducer, filterReducer } from './reducer';

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

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

const contactsAllReducer = combineReducers({
  items: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: {
    authPersistReducer,
    contacts: contactsAllReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddlaware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
