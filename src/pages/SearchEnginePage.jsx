import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import MovieList from '../components/Movies/MovieList';

const pageTitles = {
  title: 'Search Engine',
  subtitle: 'Enter the name of the movie you are looking for',
};

const SearchEngine = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovie = async (value) => {
    const url = `http://www.omdbapi.com/?s=${value}&apikey=f760859f`;

    const response = await fetch(url);
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

  const handleOnChange = (event) => setSearchValue(event.target.value);

  return (
    <>
      <Header title={pageTitles.title} subtitle={pageTitles.subtitle} />
      <Input
        placeholder="Movie title"
        type="text"
        value={searchValue}
        onChange={handleOnChange}
      />
      <MovieList movies={movies} setMovies={setMovies} />
    </>
  );
};

export default SearchEngine;
