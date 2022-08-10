/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Input from '../components/Input/Input';
import MovieList from '../components/MovieList/MovieList';
import { MovieSearchContext } from '../context/MovieContext';

const pageTitles = {
  title: 'Search Engine',
  subtitle: 'Enter the name of the movie or series you are looking for',
};

const SearchEngine = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (event) => setSearchValue(event.target.value);

  const getMovie = async (value) => {
    const url = `https://www.omdbapi.com/?s=${value}&apikey=f760859f`;
    const response = await fetch(url);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      getMovie(searchValue.trim());
    }
  }, [searchValue]);

  useEffect(() => {
    if (location.state !== null && location.state.searchValue !== undefined) {
      setSearchValue(location.state.searchValue);
    }
  }, []);

  const value = useMemo(
    () => ({
      searchValue,
    }),
    [searchValue, movies],
  );

  return (
    <MovieSearchContext.Provider value={value}>
      <Header title={pageTitles.title} subtitle={pageTitles.subtitle} />
      <Input
        placeholder="Movie title"
        type="text"
        value={searchValue}
        onChange={handleOnChange}
      />
      <MovieList movies={movies} setMovies={setMovies} />
    </MovieSearchContext.Provider>
  );
};

export default SearchEngine;
