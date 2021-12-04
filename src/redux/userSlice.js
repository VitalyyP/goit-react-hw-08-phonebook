import { createSlice } from '@reduxjs/toolkit';
import { signupThunk, loginThunk, currentThunk, logoutThunk } from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: '',
    error: null,
    isLoading: false,
    isAuth: false,
    isRefreshingUserData: false,
  },
  extraReducers: {
    [signupThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [signupThunk.fulfilled](state, action) {
      return !action.payload.user
        ? {
            ...state,
            isLoading: false,
          }
        : {
            ...state,
            isLoading: false,
            user: action.payload.user,
            token: action.payload.token,
            isAuth: true,
          };
    },

    [signupThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [loginThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [loginThunk.fulfilled](state, action) {
      return !action.payload.user
        ? {
            ...state,
            isLoading: false,
          }
        : {
            ...state,
            isLoading: false,
            user: action.payload.user,
            token: action.payload.token,
            isAuth: true,
          };
    },
    [loginThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [currentThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
        isRefreshingUserData: true,
      };
    },
    [currentThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        isRefreshingUserData: false,
        user: action.payload,
        isAuth: true,
      };
    },
    [currentThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        isRefreshingUserData: false,
        error: action.payload,
        isAuth: false,
      };
    },

    [logoutThunk.pending](state, action) {
      return {
        ...state,
        isLoading: true,
      };
    },
    [logoutThunk.fulfilled](state, action) {
      return {
        ...state,
        isLoading: false,
        user: { name: '', email: '' },
        token: '',
        isAuth: false,
      };
    },
    [logoutThunk.rejected](state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});
export const { renameProp } = authSlice.actions;
export default authSlice.reducer;
