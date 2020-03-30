import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  items: {},
  loading: false,
  hasErrors: false
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItems: state => {
      state.loading = true;
    },
    getItemsSuccess: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getItemsFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    }
  }
});

export const {
  getItems,
  getItemsSuccess,
  getItemsFailure
} = itemsSlice.actions;
export const itemsSelector = state => state.items;

export function fetchItems() {
  return async dispatch => {
    dispatch(getItems());
    try {
      await fetch('http://127.0.0.1:8000/api/item/')
        .then(res => res.json())
        .then(res => {
          dispatch(getItemsSuccess(res));
        });
    } catch (error) {
      dispatch(getItemsFailure());
    }
  };
}

export default itemsSlice.reducer;
