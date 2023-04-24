import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './contactSlice';
import { filtersReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: tasksReducer,
    filters: filtersReducer,
  },
});
