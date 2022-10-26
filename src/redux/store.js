// const { devToolsEnhancer } = require('@redux-devtools/extension');
// const { combineReducers, createStore } = require('redux');
// const { booksReducer } = require('./books/books-reducers');

// const enhancer = devToolsEnhancer();
// const rootReducer = combineReducers({ books: booksReducer });

// export const store = createStore(rootReducer, enhancer);

import { configureStore } from '@reduxjs/toolkit';
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
import booksReducer from './books/books-slice';

const persistConfig = {
  key: 'books',
  storage,
};

const persistedReducer = persistReducer(persistConfig, booksReducer);

export const store = configureStore({
  reducer: {
    books: persistedReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
