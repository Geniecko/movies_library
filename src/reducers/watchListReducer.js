import {
  ADD_TO_WATCH_LIST,
  REMOVE_FROM_WATCH_LIST,
} from '../actions/movieActions';
import { LS_KEY } from '../constants/localStorageKeys';

const persistedState = localStorage.getItem(LS_KEY.REDUX_STATE)
  ? JSON.parse(localStorage.getItem(LS_KEY.REDUX_STATE))
  : { watchList: [] };

// eslint-disable-next-line default-param-last
export function watchListReducer(state = persistedState.watchList, action) {
  switch (action.type) {
    case ADD_TO_WATCH_LIST:
      return [...state, action.payload];
    case REMOVE_FROM_WATCH_LIST:
      return state.filter((movie) => movie.imdbID !== action.payload.id);
    default:
      return state;
  }
}
