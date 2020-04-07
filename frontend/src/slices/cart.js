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
    clearCart: (state) => {
      state.cart = [];
      state.loading = false;
      state.hasErrors = false;
    },
  },
});

export const {
  getCart,
  onGetCartSuccess,
  onGetCartFail,
  clearCart,
} = cartSlice.actions;
export const cartSelector = (state) => state.cart;

export const fetchCart = () => async (dispatch) => {
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

export const addToCart = (itemId, quantity) => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch(getCart());
    await tokenCheck(
      token,
      (newToken) =>
        axios
          .get(
            `${process.env.REACT_APP_BASEURL}/api/cart`,
            JSON.stringify({
              item: itemId,
              quantity: quantity,
            }),
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${newToken}`,
              },
            }
          )
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

export const clearCartDispatch = () => (dispatch) => {
  dispatch(clearCart());
};

export default cartSlice.reducer;
