/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import {
  addToFavourites,
  addToWatchList,
  addToWatched,
  removeFromWatched,
  removeFromFavourites,
  removeFromWatchList,
} from '../../actions/movieActions';
import Button from '../Button/Button';

const BUTTON_TYPES = {
  WATCH_LIST: 'WATCH_LIST',
  FAVOURITES: 'FAVOURITES',
  WATCHED: 'WATCHED',
};

const MovieActionButtons = ({
  title, poster, type, year, id,
}) => {
  const [isWatchList, setIsWatchList] = useState(false);
  const [isFavourites, setIsFavourites] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const watchList = useSelector((state) => state.watchList);
  const favourites = useSelector((state) => state.favourites);
  const watched = useSelector((state) => state.watched);
  const dispatch = useDispatch();

  const isInArray = (movies) => {
    if (movies.findIndex((movie) => movie.imdbID === id) === -1) return false;
    return true;
  };

  const handleClick = (actionType) => {
    const movieObject = {
      title,
      poster,
      type,
      year,
      id,
    };

    if (BUTTON_TYPES.FAVOURITES === actionType) {
      if (!isFavourites) {
        dispatch(addToFavourites(movieObject));
      } else {
        dispatch(removeFromFavourites(id));
      }
      setIsFavourites((prevValue) => !prevValue);
    } else if (BUTTON_TYPES.WATCH_LIST === actionType) {
      if (!isWatchList) {
        dispatch(addToWatchList(movieObject));
      } else {
        dispatch(removeFromWatchList(id));
      }
      setIsWatchList((prevValue) => !prevValue);
    } else if (BUTTON_TYPES.WATCHED === actionType) {
      if (!isWatched) {
        dispatch(addToWatched(movieObject));
      } else {
        dispatch(removeFromWatched(id));
      }
      setIsWatched((prevValue) => !prevValue);
    }
  };

  useEffect(() => {
    setIsWatched(isInArray(watched));
  }, []);

  useEffect(() => {
    setIsFavourites(isInArray(favourites));
  }, []);

  useEffect(() => {
    setIsWatchList(isInArray(watchList));
  }, []);

  return (
    <>
      <ActionButton
        as={Button}
        small
        secondary={isWatched}
        onClick={() => handleClick(BUTTON_TYPES.WATCHED)}
      >
        {isWatched ? 'Remove from WATCHED' : 'Add to WATCHED'}
        {isWatched ? <AiFillMinusCircle /> : <AiFillPlusCircle /> }
      </ActionButton>
      <ActionButton
        as={Button}
        small
        secondary={isWatchList}
        onClick={() => handleClick(BUTTON_TYPES.WATCH_LIST)}
      >
        {isWatchList ? 'Remove from WATCH LIST' : 'Add to WATCH LIST'}
        {isWatchList ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
      </ActionButton>
      <ActionButton
        as={Button}
        small
        secondary={isFavourites}
        onClick={() => handleClick(BUTTON_TYPES.FAVOURITES)}
      >
        {isFavourites ? 'Remove from FAVOURITES' : 'Add to FAVOURITES'}
        {isFavourites ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
      </ActionButton>
    </>
  );
};

MovieActionButtons.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const ActionButton = styled.button`
  margin-top: 16px;
  align-self: flex-start;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-self: flex-end;
  }
`;

export default MovieActionButtons;
