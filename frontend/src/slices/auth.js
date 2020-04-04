import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    loading: false,
    hasErrors: false,
  },
  reducers: {
    getAuth: (state) => {
      state.loading = true;
    },
    onAuthSuccess: (state, { payload }) => {
      state.username = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    onAuthFail: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      state.username = null;
      state.loading = false;
      state.hasErrors = true;
    },
    clearData: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      state.username = null;
      state.loading = false;
      state.hasErrors = false;
    },
  },
});

export const {
  getAuth,
  onAuthSuccess,
  onAuthFail,
  clearData,
} = authSlice.actions;

export const authSelector = (state) => state.auth;

export const fetchUserDetail = (url) => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(getAuth());
    await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(onAuthSuccess(res.data.username));
      })
      .catch((err) => {
        console.log(err);
        dispatch(onAuthFail());
      });
  } else {
    dispatch(onAuthFail());
  }
};

export const login = (username, password, url) => async (dispatch) => {
  dispatch(getAuth());
  await axios
    .post(
      url,
      JSON.stringify({
        username: username,
        password: password,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => {
      localStorage.setItem('token', res.data.access_token);
      localStorage.setItem('refreshToken', res.data.refresh_token);
      dispatch(onAuthSuccess(res.data.user.username));
    })
    .catch((err) => {
      console.error(err);
    });
};

export const logout = (url) => async (dispatch) => {
  dispatch(getAuth());
  const token = localStorage.getItem('token');
  if (token) {
    await axios
      .post(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(clearData());
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

export default authSlice.reducer;
