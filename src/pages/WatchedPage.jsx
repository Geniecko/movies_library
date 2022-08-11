import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import MovieList from '../components/MovieList/MovieList';

const pageTitle = {
  title: 'Watched',
  subtitle: 'Here you will find watched movies and series',
};

const WatchedPage = () => {
  const watchedObject = useSelector((store) => store.watched);
  const [watched, setWatched] = useState(watchedObject);

  return (
    <>
      <Header title={pageTitle.title} subtitle={pageTitle.subtitle} />
      <MovieList movies={watched} setMovies={setWatched} />
    </>
  );
};

export default WatchedPage;
