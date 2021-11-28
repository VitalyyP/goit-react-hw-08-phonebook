import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './slice';
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

export const store = configureStore({
  reducer: {
    authPersistReducer,
  },
  middleware: getDefaultMiddlaware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { combineReducers } from 'redux';
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { contactReducer, filterReducer } from './reducer';
// import { contactsApi } from './contactsSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const contactsAllReducer = combineReducers({
//   items: contactReducer,
//   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: {
//     contacts: contactsAllReducer,
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
