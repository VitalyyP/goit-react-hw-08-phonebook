import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('addContact');
export const removeContactAction = createAction('removeContact');
export const filterContactAction = createAction('handleInputChange');
