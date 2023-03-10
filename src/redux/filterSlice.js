import { createSlice } from '@reduxjs/toolkit';

const initialFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
