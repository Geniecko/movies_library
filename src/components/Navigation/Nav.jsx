import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import {
  AiOutlineClose, AiFillHeart, AiFillEye, AiFillStar, AiOutlineSearch,
} from 'react-icons/ai';
import { RiFileList2Fill } from 'react-icons/ri';
import styled from 'styled-components/macro';
import Logo from '../Logo';
import LinkItem from './LinkItem';
import Link from './Link';
import { ROUTES } from '../../constants/routes';

const Sidebar = ({ isLogged }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleOnClick = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <SidebarWrapper>
      <Logo setIsOpen={setIsOpen} />
      <NavigationWrapper isOpen={isOpen}>
        {/* {isLogged && (
              <LinkItem>
                <Link as={NavLink} to={ROUTES.USER}>Edit profile</Link>
              </LinkItem>
            )} */}
        {isLogged && (
          <LinkItem>
            <Link as={NavLink} to={ROUTES.WATCH_LIST}>
              Watch list
              <RiFileList2Fill />
            </Link>
          </LinkItem>
        )}
        {isLogged && (
          <LinkItem>
            <Link as={NavLink} to={ROUTES.FAVOURITES}>
              Favourites
              <AiFillHeart />
            </Link>
          </LinkItem>
        )}
        {isLogged && (
          <LinkItem>
            <Link as={NavLink} to={ROUTES.RATED}>
              rated
              <AiFillStar />
            </Link>
          </LinkItem>
        )}
        {isLogged && (
          <LinkItem>
            <Link as={NavLink} to={ROUTES.WATCHED}>
              watched
              <AiFillEye />
            </Link>
          </LinkItem>
        )}
        {!isLogged && (
          <LinkItem>
            <Link as={NavLink} to={ROUTES.LOGIN}>
              Sign in
            </Link>
          </LinkItem>
        )}
        {!isLogged && (
          <LinkItem>
            <Link as={NavLink} to={ROUTES.REGISTER}>
              Create account
            </Link>
          </LinkItem>
        )}
        <LinkItem>
          <Link as={NavLink} end to={ROUTES.MOVIES}>
            Search engine
            <AiOutlineSearch />
          </Link>
        </LinkItem>
      </NavigationWrapper>
      <ToggleButton onClick={handleOnClick}>
        {isOpen ? <AiOutlineClose /> : <FiMenu />}
      </ToggleButton>
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
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

const SidebarWrapper = styled.aside`
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

export default Sidebar;
