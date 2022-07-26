import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import MovieCard from './MovieCard';
import MoviesFilter from './MoviesFilter';

const MovieList = ({ movies, setMovies }) => {
  const moviesList = movies.map((movie) => (
    <MovieCard
      key={movie.imdbID}
      title={movie.Title}
      poster={movie.Poster}
      year={movie.Year}
      type={movie.Type}
      id={movie.imdbID}
    />
  ));

  return (
    <>
      <FilterPanel>
        <NumberFound>
          Found:
          <span>{moviesList.length || 'No results'}</span>
        </NumberFound>
        <MoviesFilter movies={movies} setMovies={setMovies} />
      </FilterPanel>
      <GridWrapper>{moviesList}</GridWrapper>
    </>
  );
};

const FilterPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
  border-radius: 8px;
`;

const NumberFound = styled.div`
  font-size: 1.4rem;
  font-weight: 300;

  span {
    margin-left: 6px;
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setMovies: PropTypes.func.isRequired,
};

export default MovieList;
