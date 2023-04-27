import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    change(state, action) {
      return (state = action.payload);
    },
  },
});

export const { change } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
