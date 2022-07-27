import {
  ADD_TO_WATCH_LIST,
  REMOVE_FROM_WATCH_LIST,
} from '../actions/movieActions';

const initState = [];

// eslint-disable-next-line default-param-last
export function watchListReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TO_WATCH_LIST:
      return [...state, action.payload];
    case REMOVE_FROM_WATCH_LIST:
      return state.filter((movie) => movie.imdbID !== action.payload.id);
    default:
      return state;
  }
}
