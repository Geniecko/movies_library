import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { ROUTES } from '../../constants/routes';
import Button from '../Button';
import MovieImage from '../MovieImage';

const MovieCard = ({
  title, poster, year, type, id,
}) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`${ROUTES.MOVIES}/${id}`);
  };

  return (
    <CardWrapper onClick={handleOnClick}>
      <MovieImage src={poster} title={title} />
      <Title>{title}</Title>
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
      <Button small>READ MORE</Button>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${Button} {
    background-color: ${({ secondary, theme }) => (secondary ? theme.color.primary : theme.color.white)};
    color: ${({ secondary, theme }) => (secondary ? theme.color.white : theme.color.primary)};
  }

  &:hover img{
    transform: scale(1.05);
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
  display: block;
  font-weight: 300;
  font-size: 1.2rem;

  span {
    text-transform: uppercase;
    margin-left: 4px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.primary};
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
