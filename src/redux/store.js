const { devToolsEnhancer } = require('@redux-devtools/extension');
const { combineReducers, createStore } = require('redux');
const { booksReducer } = require('./books/books-reducers');

const enhancer = devToolsEnhancer();
const rootReducer = combineReducers({ books: booksReducer });

export const store = createStore(rootReducer, enhancer);
