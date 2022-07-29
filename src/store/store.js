import { configureStore } from '@reduxjs/toolkit';
import { watchListReducer } from '../reducers/watchListReducer';
import { favouritesReducer } from '../reducers/favouritesReducer';
import { watchedReducer } from '../reducers/watchedReducer';
import { ratedReducer } from '../reducers/ratedReducer';
import { LS_KEY } from '../constants/localStorageKeys';

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
    favourites: favouritesReducer,
    watched: watchedReducer,
    rated: ratedReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(LS_KEY.REDUX_STATE, JSON.stringify(store.getState()));
});
