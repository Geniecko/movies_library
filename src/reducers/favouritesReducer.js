import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from '../actions/movieActions';
import { LS_KEY } from '../constants/localStorageKeys';

const persistedState = localStorage.getItem(LS_KEY.REDUX_STATE)
  ? JSON.parse(localStorage.getItem(LS_KEY.REDUX_STATE))
  : { favourites: [] };

// eslint-disable-next-line default-param-last
export function favouritesReducer(state = persistedState.favourites, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVOURITES:
      return state.filter((movie) => movie.imdbID !== action.payload.id);
    default:
      return state;
  }
}
