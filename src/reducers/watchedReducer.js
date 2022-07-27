import {
  ADD_TO_WATCHED,
  REMOVE_FROM_WATCHED,
} from '../actions/movieActions';

const initState = [];

// eslint-disable-next-line default-param-last
export function watchedReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TO_WATCHED:
      return [...state, action.payload];
    case REMOVE_FROM_WATCHED:
      return state.filter((movie) => movie.imdbID !== action.payload.id);
    default:
      return state;
  }
}
