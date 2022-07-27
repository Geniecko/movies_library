import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addToWatchList, removeFromWatchList } from '../../actions/movieActions';
import Button from '../Button';

const MovieActionButtons = ({
  title, poster, type, year, id,
}) => {
  const [isWatchList, setIsWatchList] = useState(false);
  const moviesWatchList = useSelector((state) => state.watchList);
  const dispatch = useDispatch();

  const isInArray = (movieId, movies) => {
    if (movies.findIndex((movie) => movie.imdbID === movieId) === -1) { return false; }
    return true;
  };

  const handleClickWatchList = () => {
    if (!isWatchList) {
      dispatch(
        addToWatchList({
          title,
          poster,
          type,
          year,
          id,
        }),
      );
    } else {
      dispatch(
        removeFromWatchList(id),
      );
    }
  };

  useEffect(() => {
    if (isInArray(id, moviesWatchList)) {
      setIsWatchList(true);
    } else {
      setIsWatchList(false);
    }
  }, [id, moviesWatchList]);

  return (
    <ActionButton as={Button} small onClick={handleClickWatchList}>
      {!isWatchList ? 'ADD TO WATCH LIST' : 'REMOVE FROM WATCH LIST'}
    </ActionButton>
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
  align-self: flex-end;
`;

export default MovieActionButtons;
