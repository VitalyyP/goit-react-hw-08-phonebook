import { createReducer } from '@reduxjs/toolkit';

const initialState = null;

export const contactReducer = createReducer(initialState, {
  addContact: (state, { payload }) => [...state, payload],
  removeContact: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

export const filterReducer = createReducer('', {
  handleInputChange: (_, { payload }) => payload,
});
