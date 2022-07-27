import { configureStore } from '@reduxjs/toolkit';
import { watchListReducer } from '../reducers/watchListReducer';
import { favouritesReducer } from '../reducers/favouritesReducer';
import { watchedReducer } from '../reducers/watchedReducer';

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
    favourites: favouritesReducer,
    watched: watchedReducer,
  },
});
