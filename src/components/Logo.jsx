import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const LogoWrapper = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (hover: hover) {
    &:hover {
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        transform: translateY(-8px);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: 40px;
  }

  span {
    font-weight: 600;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.primary};
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
    navigate(`${ROUTES.MOVIES}`);
  };

  return (
    <LogoWrapper onClick={handleOnClick}>
      MOVIES
      <span>LIBRARY</span>
    </LogoWrapper>
  );
};

export default Logo;
