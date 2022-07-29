import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import MoviesFilter from '../components/Movies/MoviesFilter';
import RatedListMovie from '../components/Movies/RatedListMovie';

const pageTitle = {
  title: 'Rated',
  subtitle: 'Here you will find rated movies and series',
};

const RatedPage = () => {
  const moviesObject = useSelector((store) => store.rated);
  const [movies, setMovies] = useState(moviesObject);
  return (
    <>
      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <FilterPanel>
        <NumberFound>
          Found:
          <span>{movies.length || 'No results'}</span>
        </NumberFound>
        <MoviesFilter movies={movies} setMovies={setMovies} />
      </FilterPanel>
      <RatedListMovie movies={movies} />
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

export default RatedPage;
