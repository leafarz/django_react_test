import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  item: {},
  loading: false,
  hasErrors: false,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    getItem: (state) => {
      state.loading = true;
    },
    getItemSuccess: (state, { payload }) => {
      state.item = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getItemFail: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getItem, getItemSuccess, getItemFail } = itemSlice.actions;
export const itemSelector = (state) => state.item;

export function fetchItem(id) {
  return async (dispatch) => {
    dispatch(getItem());
    try {
      await fetch(`${process.env.REACT_APP_BASEURL}/api/item/${id}`)
        .then((res) => res.json())
        .then((res) => {
          dispatch(getItemSuccess(res));
        });
    } catch (error) {
      dispatch(getItemFail());
    }
  };
}

export default itemSlice.reducer;
