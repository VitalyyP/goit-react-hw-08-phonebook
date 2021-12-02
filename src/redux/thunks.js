import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

const BASE_USER_URL = 'https://connections-api.herokuapp.com';
const userSingup = '/users/signup';
const userLogin = '/users/login';
const userLogout = '/users/logout';
const userCurrent = '/users/current';

export const signupThunk = createAsyncThunk(
  'users/signup',
  async (user, { refectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userSingup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      return data; // {user: {name: '', email: ''}, token: ''}
    } catch (err) {
      isRejectedWithValue({ error: err.message });
    }
  },
);

// vvvv@vvvv.vvv
//   vvvvvvvv

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { refectWithValue }) => {
    try {
      const response = await fetch(BASE_USER_URL + userLogin, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      return data; // {user: {name: '', email: ''}, token: ''}
    } catch (err) {
      isRejectedWithValue({ error: err.message });
    }
  },
);

export const currentThunk = createAsyncThunk(
  'users/current',
  async (_, { refectWithValue, getState }) => {
    const state = getState();
    const token = state.authPersistReducer.token;

    if (!token) return refectWithValue();

    try {
      const response = await fetch(BASE_USER_URL + userCurrent, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      return data; // {name: '', email: ''}
    } catch (err) {
      isRejectedWithValue({ error: err.message });
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { refectWithValue, getState }) => {
    const state = getState();
    const token = state.authPersistReducer.token;
    try {
      const response = await fetch(BASE_USER_URL + userLogout, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      return data; // {name: '', email: ''}
    } catch (err) {
      isRejectedWithValue({ error: err.message });
    }
  },
);
