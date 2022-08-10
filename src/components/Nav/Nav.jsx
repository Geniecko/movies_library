import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import {
  AiOutlineClose,
  AiFillHeart,
  AiFillEye,
  AiFillStar,
  AiOutlineSearch,
} from 'react-icons/ai';
import { RiFileList2Fill } from 'react-icons/ri';
import styled from 'styled-components/macro';
import Logo from '../Logo';
import NavItem from '../NavItem/NavItem';
import Link from '../Link/Link';
import { ROUTES } from '../../constants/routes';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleOnClick = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const LinksData = [
    {
      label: 'watch list',
      target: ROUTES.WATCH_LIST,
      iconElement: <RiFileList2Fill />,
    },
    {
      label: 'Favourites',
      target: ROUTES.FAVOURITES,
      iconElement: <AiFillHeart />,
    },
    {
      label: 'Rated',
      target: ROUTES.RATED,
      iconElement: <AiFillStar />,
    },
    {
      label: 'Watched',
      target: ROUTES.WATCHED,
      iconElement: <AiFillEye />,
    },
    {
      label: 'Search Engine',
      target: ROUTES.SEARCH_ENGINE,
      iconElement: <AiOutlineSearch />,
    },
  ];

  const NavLinks = LinksData.map((link) => (
    <NavItem key={link.label}>
      <Link as={NavLink} to={link.target}>
        {link.label}
        {link.iconElement}
      </Link>
    </NavItem>
  ));

  return (
    <NavWrapper>
      <Logo setIsOpen={setIsOpen} />
      <NavigationWrapper isOpen={isOpen}>
        {NavLinks}
      </NavigationWrapper>
      <ToggleButton onClick={handleOnClick}>
        {isOpen ? <AiOutlineClose /> : <FiMenu />}
      </ToggleButton>
    </NavWrapper>
  );
};

const NavigationWrapper = styled.nav`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 55px;
    left: 0;
    padding: 32px;
    background-color: ${({ theme }) => theme.color.secondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 16px;
  }
`;

const NavWrapper = styled.aside`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.color.secondary};
  height: 60px;
  z-index: 100;
  position: fixed;
  top: 0;
  padding: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 16px 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 225px;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
    justify-content: unset;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 250px;
    padding: 40px 32px;
  }
`;

const ToggleButton = styled.button`
  cursor: pointer;
  width: 28px;
  height: 28px;
  background: none;
  outline: 0;
  border: 0;

  svg {
    width: 28px;
    height: 28px;
    color: ${({ theme }) => theme.color.white};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export default Nav;
