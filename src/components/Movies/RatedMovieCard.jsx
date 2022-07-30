import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FaStar } from 'react-icons/fa';
import MovieImage from '../MovieImage';
import { ROUTES } from '../../constants/routes';
import { MovieSearchContext } from '../../context/MovieContext';
import Button from '../Button';

const RatedMovieCard = ({
  title, poster, id, rate, rateComment, plot,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchValue } = useContext(MovieSearchContext);

  const handleOnClick = () => {
    navigate(`${ROUTES.MOVIES}/${id}`, {
      state: { searchValue, prevPath: location.pathname },
    });
  };

  const createStars = () => {
    const stars = [];
    for (let i = 0; i < rate; i += 1) {
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  const stars = createStars();

  return (
    <Card>
      <MovieImage src={poster} title={title} click={handleOnClick} />
      <Title>{title}</Title>
      <Plot>{plot}</Plot>
      <Rate>
        <span>Your rate:</span>
        <StarsWrapper>
          {stars}
          <span>
            {rate}
            {' / 10'}
          </span>
        </StarsWrapper>
      </Rate>
      {rateComment && (
        <Rate>
          <span>Your comment rate:</span>
          <p>{rateComment}</p>
        </Rate>
      )}
      <MoreButton secondary small as={Button} onClick={handleOnClick}>MORE</MoreButton>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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

const Title = styled.h3`
  font-size: 2rem;
  margin: 0;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s ease-in;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Plot = styled.p`
  margin: 0;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Rate = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};

  span {
    font-weight: 300;
    display: block;
    font-size: 1.4rem;
    margin-bottom: 8px;
  }

  p {
    font-weight: 600;
    margin: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const StarsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  span {
    width: 100%;
    font-weight: 600;
    display: block;
    margin-top: 4px;
    margin-bottom: 0;
  }
`;

RatedMovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  rateComment: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
};

const MoreButton = styled.button`
  margin-top: auto;
`;

export default RatedMovieCard;
