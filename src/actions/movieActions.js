export const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
export const REMOVE_FROM_WATCH_LIST = 'REMOVE_FROM_WATCH_LIST';

export const addToWatchList = ({
  title, poster, type, year, id,
}) => ({
  type: ADD_TO_WATCH_LIST,
  payload: {
    Title: title,
    Poster: poster,
    Type: type,
    Year: year,
    imdbID: id,
  },
});

export const removeFromWatchList = (id) => ({
  type: REMOVE_FROM_WATCH_LIST,
  payload: {
    id,
  },
});
