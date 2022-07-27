export const ADD_TO_WATCH_LIST = 'ADD_TO_WATCH_LIST';
export const REMOVE_FROM_WATCH_LIST = 'REMOVE_FROM_WATCH_LIST';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const ADD_TO_WATCHED = 'ADD_TO_WATCHED';
export const REMOVE_FROM_WATCHED = 'REMOVE_FROM_WATCHED';

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

export const addToFavourites = ({
  title, poster, type, year, id,
}) => ({
  type: ADD_TO_FAVOURITES,
  payload: {
    Title: title,
    Poster: poster,
    Type: type,
    Year: year,
    imdbID: id,
  },
});

export const removeFromFavourites = (id) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: {
    id,
  },
});

export const addToWatched = ({
  title, poster, type, year, id,
}) => ({
  type: ADD_TO_WATCHED,
  payload: {
    Title: title,
    Poster: poster,
    Type: type,
    Year: year,
    imdbID: id,
  },
});

export const removeFromWatched = (id) => ({
  type: REMOVE_FROM_WATCHED,
  payload: {
    id,
  },
});
