import { createSlice } from '@reduxjs/toolkit';
import { books } from 'data/books';

const initialState = {
  books,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },

    deleteBook: (state, { payload }) => {
      state.books = state.books.filter(book => book.id !== payload);
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
