/* eslint-disable react/prop-types */
/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components/macro';
import Modal from './Modal';
import Button from './Button';
import { addRate, removeRate, editRate } from '../actions/movieActions';

const RateForm = ({
  handleOnClose, isModalOpen, movie, isEditRateMode
}) => {
  const [commentRateValue, setCommentRateValue] = useState('');
  const [rateValue, setRateValue] = useState(0);
  const [isRateValidMessage, setIsRateValidMessage] = useState(false);
  const [isRateCommentValidMessage, setIsRateCommentValidMessage] = useState(false);
  const dispatch = useDispatch();

  const handleCommentRateValue = (event) => {
    setCommentRateValue(event.target.value);
  };

  const handleRateValue = (event) => {
    setRateValue(Number(event.target.dataset.value));
    setIsRateValidMessage(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (rateValue === 0) {
      setIsRateValidMessage(true);
      return;
    }

    if (commentRateValue.length <= 10 && commentRateValue.length >= 1) {
      setIsRateCommentValidMessage(true);
      return;
    }

    const movieObject = {
      title: movie.Title,
      poster: movie.Poster,
      plot: movie.Plot,
      id: movie.imdbID,
      rate: rateValue,
      rateComment: commentRateValue,
    };

    if (isEditRateMode) {
      dispatch(editRate(movie.imdbID, rateValue, commentRateValue));
    } else {
      dispatch(addRate(movieObject));
    }
    setRateValue(0);
    setCommentRateValue('');
    setIsRateValidMessage(false);
    setIsRateCommentValidMessage(false);
    handleOnClose();
  };

  const handleRemoveRate = () => {
    dispatch(removeRate(movie.imdbID));
    setRateValue(0);
    setCommentRateValue('');
    setIsRateValidMessage(false);
    setIsRateCommentValidMessage(false);
    handleOnClose();
  };

  const createStars = () => {
    const stars = [];

    for (let i = 0; i < 10; i += 1) {
      if (i < rateValue) {
        stars.push(
          <Star
            className="color"
            key={i}
            data-value={i + 1}
            onClick={handleRateValue}
          >
            <FaStar />
          </Star>
        );
      } else {
        stars.push(
          <Star key={i} data-value={i + 1} onClick={handleRateValue}>
            <FaStar />
          </Star>
        );
      }
    }

    return stars;
  };

  const rateStars = createStars();

  const validMessages = {
    rate: '(Select the number of stars)',
    commentRate:
      '(The field should be longer than 10 characters or left blank if you dont want to add a comment)',
  };

  return (
    <Modal handleOnClose={handleOnClose} isModalOpen={isModalOpen}>
      <HeaderWrapper>
        <h3>{isEditRateMode ? 'Edit your rate' : 'Add your rate'}</h3>
      </HeaderWrapper>
      <form onSubmit={handleOnSubmit}>
        <InputWrapper>
          <Label>
            {isEditRateMode ? 'Edit rate' : 'Select rate'}
            {isRateValidMessage && <span>{validMessages.rate}</span>}
          </Label>
          <StarsWrapper>
            {rateStars}
            <span>
              {rateValue}
              {' '}
              / 10
            </span>
          </StarsWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>
            {isEditRateMode ? 'Edit your comment(optional)' : 'Write your comment(optional)' }
            {isRateCommentValidMessage && (
              <span>{validMessages.commentRate}</span>
            )}
          </Label>
          <textarea
            type="textarea"
            value={commentRateValue}
            onChange={handleCommentRateValue}
          />
        </InputWrapper>
        <SubmitButton type="submit" small as={Button}>
          {isEditRateMode ? 'EDIT RATE' : 'ADD RATE'}
        </SubmitButton>
        {isEditRateMode && (
          <SubmitButton type="button" as={Button} onClick={handleRemoveRate} small>
            REMOVE RATE
          </SubmitButton>
        )}
      </form>
    </Modal>
  );
};

const HeaderWrapper = styled.div`
  margin-top: 16px;

  h3 {
    color: ${({ theme }) => theme.color.white};
    font-weight: 600;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  textarea {
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    padding: 8px 16px;
    border: none;
    outline: 0;
    font-size: 1.4rem;
    font-weight: 600;
    min-height: 150px;
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Label = styled.label`
  font-weight: 300;
  font-size: 1.4rem;

  span {
    color: #eccf29;
    margin-left: 8px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 16px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  text-transform: uppercase;
`;

const StarsWrapper = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  align-items: center;

  span {
    display: block;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
      width: unset;
      margin-left: 8px;
    }
  }
`;

const Star = styled.div`
  cursor: pointer;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.white};

  &.color {
    color: #eccf29;
  }

  svg {
    pointer-events: none;
  }
`;

RateForm.propTypes = {
  handleOnClose: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isEditRateMode: PropTypes.bool.isRequired,
};

export default RateForm;
