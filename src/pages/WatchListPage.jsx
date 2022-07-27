import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import MovieList from '../components/Movies/MovieList';

const pageTitle = {
  title: 'Watch List',
  subtitle: 'Here you will find movies waiting to be watched',
};

const WatchListPage = () => {
  const moviesObject = useSelector((store) => store.watchList);
  const [movies, setMovies] = useState(moviesObject);

  return (
    <>
      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <MovieList movies={movies} setMovies={setMovies} />
    </>
  );
};

export default WatchListPage;
