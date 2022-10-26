// import { ADD_BOOK, DELETE_BOOK } from './books-type';

// export const addBook = book => {
//   return {
//     type: ADD_BOOK,
//     payload: book,
//   };
// };

// export const deleteBook = id => {
//   return {
//     type: DELETE_BOOK,
//     payload: id,
//   };
// };

import { createAction } from '@reduxjs/toolkit';

export const addBook = createAction('book/add');
export const deleteBook = createAction('book/delete');
