import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

const LogoWrapper = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.color.primary};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: 40px;
  }

  span {
    font-weight: 300;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.pageBackground};
    margin-left: 8px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: block;
      font-size: 1.8rem;
      margin-left: 0;
    }
  }
`;

const Logo = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/');
  };

  return (
    <LogoWrapper onClick={handleOnClick}>
      MOVIES
      <span>LIBRARY</span>
    </LogoWrapper>
  );
};

export default Logo;
