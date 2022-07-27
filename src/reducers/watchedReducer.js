import {
  ADD_TO_WATCHED,
  REMOVE_FROM_WATCHED,
} from '../actions/movieActions';
import { LS_KEY } from '../constants/localStorageKeys';

const persistedState = localStorage.getItem(LS_KEY.REDUX_STATE)
  ? JSON.parse(localStorage.getItem(LS_KEY.REDUX_STATE))
  : { watched: [] };

// eslint-disable-next-line default-param-last
export function watchedReducer(state = persistedState.watched, action) {
  switch (action.type) {
    case ADD_TO_WATCHED:
      return [...state, action.payload];
    case REMOVE_FROM_WATCHED:
      return state.filter((movie) => movie.imdbID !== action.payload.id);
    default:
      return state;
  }
}
