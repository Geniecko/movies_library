import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { FaStar } from 'react-icons/fa';
import { ROUTES } from '../../constants/routes';
import Button from '../Button/Button';
import MovieImage from '../MovieImage/MovieImage';
import { MovieSearchContext } from '../../context/MovieContext';

const MovieCard = ({
  title, poster, year, type, id, rate, rateComment,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchValue } = useContext(MovieSearchContext);

  const handleOnClick = () => {
    navigate(`${ROUTES.MOVIE}/${id}`, {
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

  const rateEl = rate > 0 && (
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
  );

  const rateCommentEl = rateComment && (
    <Rate>
      <span>Your comment rate:</span>
      <p>{rateComment}</p>
    </Rate>
  );

  return (
    <Card>
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
      {rateEl}
      {rateCommentEl}
      <Button small secondary={rate > 0 && true} onClick={handleOnClick}>
        MORE
      </Button>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
  border-radius: 8px;

  img {
    cursor: pointer;

    @media (hover: hover) {
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

  @media (hover: hover) {
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

const Rate = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 16px;

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

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  rate: PropTypes.number,
  rateComment: PropTypes.string,
};

MovieCard.defaultProps = {
  rate: 0,
  rateComment: '',
};

export default MovieCard;
