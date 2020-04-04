import axios from 'axios';
import config from './../config';
import { createSlice } from '@reduxjs/toolkit';

const jwtDecode = require('jwt-decode');

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

const tokenCheck = async (token, onSuccess, onFail) => {
  const refresh_url = `${config.baseurl}/api/auth/token/refresh/`;
  const hasExpired = (token, min_threshold) => {
    const exp = jwtDecode(token)['exp'];
    const diff = exp - Date.now();
    min_threshold = min_threshold == undefined ? 1 : min_threshold;
    return exp - Date.now() < min_threshold * 60;
  };
  if (hasExpired(token)) {
    axios
      .post(
        refresh_url,
        JSON.stringify({
          refresh: localStorage.getItem('refreshToken'),
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        localStorage.setItem('token', res.data.access);
        onSuccess(res.data.access);
      })
      .catch((err) => {
        console.log(err);
        onFail();
      });
  } else {
    onSuccess(token);
  }
};

export const fetchUserDetail = (url) => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(getAuth());
    tokenCheck(
      token,
      (newToken) =>
        axios
          .get(url, {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          })
          .then((res) => {
            dispatch(onAuthSuccess(res.data.username));
          })
          .catch((err) => {
            console.log(err);
            dispatch(onAuthFail());
          }),
      () => dispatch(onAuthFail())
    );
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
    await tokenCheck(
      token,
      async () =>
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
          }),
      () => dispatch(clearData())
    );
  }
};

export default authSlice.reducer;
