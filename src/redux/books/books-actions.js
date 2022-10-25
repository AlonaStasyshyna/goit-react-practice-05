import { ADD_BOOK, DELETE_BOOK } from './books-type';

export const addBook = book => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const deleteBook = id => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};
