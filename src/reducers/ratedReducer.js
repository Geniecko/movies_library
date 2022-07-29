import { ADD_RATE, REMOVE_RATE, EDIT_RATE } from '../actions/movieActions';
import { LS_KEY } from '../constants/localStorageKeys';

const persistedState = localStorage.getItem(LS_KEY.REDUX_STATE)
  ? JSON.parse(localStorage.getItem(LS_KEY.REDUX_STATE))
  : { rated: [] };

// eslint-disable-next-line default-param-last
export function ratedReducer(rated = persistedState.rated, action) {
  switch (action.type) {
    case ADD_RATE:
      return [...rated, action.payload];
    case REMOVE_RATE:
      return rated.filter((movie) => movie.imdbID !== action.payload.id);
    case EDIT_RATE:
      return rated.map((movie) => {
        if (movie.imdbID !== action.payload.id) {
          return movie;
        }

        if (action.payload.rateComment.length > 0) {
          return {
            ...movie,
            rate: action.payload.rate,
            rateComment: action.payload.rateComment,
          };
        }

        return {
          ...movie,
          rate: action.payload.rate,
        };
      });
    default:
      return rated;
  }
}
