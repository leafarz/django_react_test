import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: 'All',
  },
  reducers: {
    setCategory: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export const categorySelector = (state) => state.category.value;

export const setCategoryDispatch = (category) => (dispatch) => {
  dispatch(setCategory(category));
};

export default categorySlice.reducer;
