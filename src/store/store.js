import { configureStore } from '@reduxjs/toolkit';
import { watchListReducer } from '../reducers/watchListReducer';
import { favouritesReducer } from '../reducers/favouritesReducer';
import { watchedReducer } from '../reducers/watchedReducer';
import { LS_KEY } from '../constants/localStorageKeys';

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
    favourites: favouritesReducer,
    watched: watchedReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(LS_KEY.REDUX_STATE, JSON.stringify(store.getState()));
});
