import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from '../actions/movieActions';

const initState = [];

// eslint-disable-next-line default-param-last
export function favouritesReducer(state = initState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return [...state, action.payload];
    case REMOVE_FROM_FAVOURITES:
      return state.filter((movie) => movie.imdbID !== action.payload.id);
    default:
      return state;
  }
}
