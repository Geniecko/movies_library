import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import Header from '../components/Header';
import MovieImage from '../components/MovieImage';

const pageTitles = {
  title: 'Previw',
  subtitle: 'Here you will find more information about the movie',
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const getMovie = async (movieId) => {
    const url = `http://www.omdbapi.com/?i=${movieId}&apikey=f760859f`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const responseJson = await response.json();
    setMovie(responseJson);
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  const isEmpty = Object.keys(movie).length === 0;

  return (
    <>
      <Header title={pageTitles.title} subtitle={pageTitles.subtitle} />
      {!isEmpty ? (
        <MovieWrapper>
          <LeftColumn>
            <MovieImage src={movie.Poster} title={movie.Titlte} />
          </LeftColumn>
          <RightColumn>
            <h1>{movie.Title}</h1>
            <Button small onClick={() => navigate(-1)}>
              GO BACK
            </Button>
          </RightColumn>
        </MovieWrapper>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

const MovieWrapper = styled.div`
  display: flex;
`;

const LeftColumn = styled.div`
  max-width: 400px;
  flex: 1;
`;

const RightColumn = styled.div`
  flex: 1;
`;

export default MovieDetailsPage;
