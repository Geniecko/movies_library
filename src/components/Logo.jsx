import React from 'react';
import styled from 'styled-components/macro';
import { useNavigate } from 'react-router-dom';

const LogoWrapper = styled.div`
  font-weight: 700;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  transition: transform .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
    text-align: center;
    margin-bottom: 40px;
  }

  &:hover{
    transform: translateY(-8px);
  }

  span {
    font-weight: 300;
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