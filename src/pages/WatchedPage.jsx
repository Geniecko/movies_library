import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import MovieList from '../components/Movies/MovieList';

const pageTitle = {
  title: 'Watched',
  subtitle: 'Here you will find watched movies and series',
};

const WatchedPage = () => {
  const moviesObject = useSelector((store) => store.watched);
  const [movies, setMovies] = useState(moviesObject);

  return (
    <>
      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <MovieList movies={movies} setMovies={setMovies} />
    </>
  );
};

export default WatchedPage;
