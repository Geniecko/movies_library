import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const MovieImage = ({ src, title }) => {
  const isImage = src === ('N/A' || '') ? (
    <ImagePlaceHolder>No poster</ImagePlaceHolder>
  ) : (
    <img src={src} alt={title} />
  );

  return <ImageWrapper>{isImage}</ImageWrapper>;
};

const ImageWrapper = styled.div`
  aspect-ratio: 3/3.5;
  overflow: hidden;
  border-radius: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in;
  }
`;

const ImagePlaceHolder = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.grey};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

MovieImage.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

MovieImage.defaultProps = {
  src: 'N/A',
  title: '',
};

export default MovieImage;
