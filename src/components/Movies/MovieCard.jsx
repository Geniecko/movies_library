import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { ROUTES } from '../../constants/routes';
import Button from '../Button';
import MovieImage from '../MovieImage';
import { MovieSearchContext } from '../../context/MovieContext';

const MovieCard = ({
  title, poster, year, type, id,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchValue } = useContext(MovieSearchContext);

  const handleOnClick = () => {
    navigate(`${ROUTES.MOVIE}/${id}`, { state: { searchValue, prevPath: location.pathname } });
  };

  return (
    <CardWrapper>
      <MovieImage src={poster} title={title} click={handleOnClick} />
      <Title onClick={handleOnClick}>{title}</Title>
      <InfoWrapper>
        <AdditionalInfo>
          Type:
          <span>{type}</span>
        </AdditionalInfo>
        <AdditionalInfo>
          Year:
          <span>{year}</span>
        </AdditionalInfo>
      </InfoWrapper>
      <Button small onClick={handleOnClick}>
        MORE
      </Button>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
  border-radius: 8px;

  img {
    cursor: pointer;
    
    @media (hover: hover){
      &:hover {
        transform: scale(1.05);
      }
    } 
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 16px;
  margin-bottom: 32px;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease-in;
  cursor: pointer;
  align-self: flex-start;


  @media (hover: hover){
    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: auto;
  margin-bottom: 16px;
`;

const AdditionalInfo = styled.div`
  text-transform: capitalize;
  display: block;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.primary};

  span {
    text-transform: capitalize;
    margin-left: 4px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MovieCard;
