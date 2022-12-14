import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FaStar } from 'react-icons/fa';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import { RiSettings3Fill } from 'react-icons/ri';
import MovieActionButtons from '../components/MovieActionButtons/MovieActionButtons';
import Button from '../components/Button/Button';
import Header from '../components/Header/Header';
import MovieImage from '../components/MovieImage/MovieImage';
import { ROUTES } from '../constants/routes';
import RateForm from '../components/RateForm/RateForm';

const pageTitles = {
  title: 'Preview',
  subtitle: 'Here you will find more information about the movie',
};

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditRateMode, setIsEditRateMode] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { searchValue } = location.state;
  const rated = useSelector((state) => state.rated);

  const isInArray = (movies) => {
    if (movies.findIndex((item) => item.imdbID === id) === -1) return false;
    return true;
  };

  const handleOnClose = () => setIsModalOpen(false);

  const handleRateButton = () => {
    setIsModalOpen(true);
  };

  const getMovie = async (movieId) => {
    const url = `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=f760859f`;
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const responseJson = await response.json();
    setMovie(responseJson);
  };

  const handleOnClick = () => {
    if (location.state.prevPath === ROUTES.SEARCH_ENGINE) {
      navigate(ROUTES.SEARCH_ENGINE, { state: { searchValue } });
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  useEffect(() => {
    if (isInArray(rated)) {
      setIsEditRateMode(true);
    } else {
      setIsEditRateMode(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rated]);

  const isEmpty = Object.keys(movie).length === 0;

  const genres = movie.Genre?.split(',');

  const genresList = genres?.map((genre) => (
    <Categorie key={genre}>{genre}</Categorie>
  ));

  return (
    <>
      <RateForm
        handleOnClose={handleOnClose}
        isModalOpen={isModalOpen}
        movie={movie}
        isEditRateMode={isEditRateMode}
      />
      <Header title={pageTitles.title} subtitle={pageTitles.subtitle} />
      <Button small onClick={handleOnClick}>
        GO BACK
        <BsFillArrowLeftCircleFill />
      </Button>
      {!isEmpty ? (
        <MovieWrapper>
          <LeftColumn>
            <MovieImage src={movie.Poster} title={movie.Titlte} />
            <MovieActionButtons
              title={movie.Title}
              poster={movie.Poster}
              type={movie.Type}
              year={movie.Year}
              id={id}
            />
            <RateButton
              as={Button}
              small
              secondary={isEditRateMode}
              onClick={handleRateButton}
            >
              {isEditRateMode ? 'Edit RATE' : 'Add RATE'}
              {isEditRateMode ? <RiSettings3Fill /> : <AiFillPlusCircle />}
            </RateButton>
          </LeftColumn>
          <RightColumn>
            <h2>{movie.Title !== 'N/A' ? movie.Title : 'No data'}</h2>
            {movie.imdbRating !== 'N/A' ? (
              <Score>
                {movie.imdbRating}
                {' / '}
                10
                <FaStar />
              </Score>
            ) : null}
            <Categories>{genresList}</Categories>
            {movie.Type !== 'N/A' ? (
              <AdditionalInfo>
                Type:
                <span>
                  {movie.Type[0].toUpperCase() + movie.Type.substring(1)}
                </span>
              </AdditionalInfo>
            ) : null}
            {movie.Country !== 'N/A' ? (
              <AdditionalInfo>
                Country:
                <span>{movie.Country}</span>
              </AdditionalInfo>
            ) : null}
            {movie.Year !== 'N/A' ? (
              <AdditionalInfo>
                Year:
                <span>{movie.Year}</span>
              </AdditionalInfo>
            ) : null}
            {movie.Director !== 'N/A' ? (
              <AdditionalInfo>
                Director:
                <span>{movie.Director}</span>
              </AdditionalInfo>
            ) : null}
            {movie.Actors !== 'N/A' ? (
              <AdditionalInfo>
                Actors:
                <span>{movie.Actors}</span>
              </AdditionalInfo>
            ) : null}
            {movie.Language !== 'N/A' ? (
              <AdditionalInfo>
                Language:
                <span>{movie.Language}</span>
              </AdditionalInfo>
            ) : null}
            {movie.Released !== 'N/A' ? (
              <AdditionalInfo>
                Released:
                <span>{movie.Released}</span>
              </AdditionalInfo>
            ) : null}
            {movie.Runtime !== 'N/A' ? (
              <AdditionalInfo>
                Runtime:
                <span>{movie.Runtime}</span>
              </AdditionalInfo>
            ) : null}
            {movie.Plot !== 'N/A' ? (
              <AdditionalInfo>
                Plot:
                <span>{movie.Plot}</span>
              </AdditionalInfo>
            ) : null}
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
  flex-direction: column;
  gap: 24px;
  margin-top: 32px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
  border-radius: 8px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 32px;
    flex-direction: row-reverse;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 325px;
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Categories = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Categorie = styled.span`
  display: block;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  padding: 4px 12px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
  font-size: 1.4rem;
`;

const AdditionalInfo = styled.div`
  max-width: 600px;
  margin-top: 12px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;

  span {
    font-weight: 400;
    margin-left: 8px;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.secondary};

  svg {
    color: #eccf29;
    margin-left: 8px;
  }
`;

const RateButton = styled.button`
  margin-top: 16px;
  align-self: flex-start;
  display: flex;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-self: flex-end;
  }
`;

export default MovieDetailsPage;
