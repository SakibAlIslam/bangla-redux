import { configureStore } from '@reduxjs/toolkit';
import { counterReducer, personsReducer } from './reducers';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    persons: personsReducer
  },
});
