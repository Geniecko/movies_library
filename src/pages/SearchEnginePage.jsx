import React, { useEffect, useState, useMemo } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import MovieList from '../components/Movies/MovieList';
import { MovieSearchContext } from '../context/MovieContext';

const pageTitles = {
  title: 'Search Engine',
  subtitle: 'Enter the name of the movie or series you are looking for',
};

const SearchEngine = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (event) => setSearchValue(event.target.value);

  const getMovie = async (value) => {
    const url = `http://www.omdbapi.com/?s=${value}&apikey=f760859f`;
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
    getMovie(searchValue.trim());
  }, [searchValue]);

  const value = useMemo(
    () => ({
      searchValue,
      setSearchValue,
    }),
    [searchValue],
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
