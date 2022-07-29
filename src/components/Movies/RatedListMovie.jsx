import React from 'react';
import PropTypes, { objectOf } from 'prop-types';
import styled from 'styled-components/macro';
import RatedMovieCard from './RatedMovieCard';

const RatedListMovie = ({ movies }) => {
  const ratedList = movies.map((movie) => (
    <RatedMovieCard
      key={movie.imdbID}
      title={movie.Title}
      poster={movie.Poster}
      plot={movie.Plot}
      id={movie.imdbID}
      rate={movie.rate}
      rateComment={movie.rateComment}
    />
  ));

  return <RatedListWrapper>{ratedList}</RatedListWrapper>;
};

const RatedListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (min-width: 624px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

RatedListMovie.propTypes = {
  movies: PropTypes.arrayOf(objectOf).isRequired,
};

export default RatedListMovie;
