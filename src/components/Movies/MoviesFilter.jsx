import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Button from '../Button';

const MoviesFilter = ({ movies, setMovies }) => {
  const sortByTitle = () => {
    movies.sort((a, b) => {
      if (a.Title < b.Title) {
        return -1;
      }
      if (a.Title > b.Title) {
        return 1;
      }
      return 0;
    });

    setMovies([...movies]);
  };

  const sortByYear = () => {
    movies.sort((a, b) => {
      if (a.Year < b.Year) {
        return -1;
      }
      if (a.Year > b.Year) {
        return 1;
      }
      return 0;
    });

    setMovies([...movies]);
  };

  return (
    <FilterWrapper>
      Sort by:
      <Button small secondary onClick={sortByYear}>
        Year
      </Button>
      <Button small secondary onClick={sortByTitle}>
        Title
      </Button>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 1.4rem;
`;

MoviesFilter.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  setMovies: PropTypes.func.isRequired,
};

export default MoviesFilter;
