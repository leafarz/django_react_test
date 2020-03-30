import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 0
  },
  reducers: {
    setPage: (state, { payload }) => {
      state.value = payload;
    }
  }
});

export const { setPage } = pageSlice.actions;

export const pageSelector = state => state.page.value;

export const setPageDispatch = page => dispatch => {
  dispatch(setPage(page));
};

export default pageSlice.reducer;
