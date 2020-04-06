import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { tokenCheck } from './../common/authHelper';

export const initialState = {
  cart: [],
  loading: false,
  hasErrors: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state) => {
      state.loading = true;
    },
    onGetCartSuccess: (state, { payload }) => {
      state.cart = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    onGetCartFail: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getCart, onGetCartSuccess, onGetCartFail } = cartSlice.actions;
export const cartSelector = (state) => state.cart;

export const fetchCart = (url) => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(getCart());
    await tokenCheck(
      token,
      (newToken) =>
        axios
          .get(`${process.env.REACT_APP_BASEURL}/api/usercart`, {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          })
          .then((res) => {
            dispatch(onGetCartSuccess(res.data));
          })
          .catch((err) => {
            console.log(err);
            dispatch(onGetCartFail());
          }),
      () => dispatch(onGetCartFail())
    );
  }
};

export default cartSlice.reducer;
