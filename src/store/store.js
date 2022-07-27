import { configureStore } from '@reduxjs/toolkit';
import { watchListReducer } from '../reducers/watchListReducer';

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
});
