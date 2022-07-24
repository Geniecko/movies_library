import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import Logo from './Logo';
import LinkItem from './LinkItem';
import { ROUTES } from '../constants/routes';

const Sidebar = ({ isLogged }) => (
  <SidebarWrapper>
    <Logo />
    <NavigationWrapper>
      {isLogged && (
        <LinkItem>
          <NavLink to={ROUTES.USER}>Edit profile</NavLink>
        </LinkItem>
      )}
      {isLogged && (
        <LinkItem>
          <NavLink to={ROUTES.WATCHLIST}>Watch list</NavLink>
        </LinkItem>
      )}
      {isLogged && (
        <LinkItem>
          <NavLink to={ROUTES.FAVOURITES}>Favourites</NavLink>
        </LinkItem>
      )}
      {isLogged && (
        <LinkItem>
          <NavLink to={ROUTES.RATED}>rated</NavLink>
        </LinkItem>
      )}
      {isLogged && (
        <LinkItem>
          <NavLink to={ROUTES.WATCHED}>watched</NavLink>
        </LinkItem>
      )}
      {!isLogged && (
        <LinkItem>
          <NavLink to={ROUTES.LOGIN}>Sign in</NavLink>
        </LinkItem>
      )}
      {!isLogged && (
        <LinkItem>
          <NavLink to={ROUTES.REGISTER}>Create account</NavLink>
        </LinkItem>
      )}
      <LinkItem>
        <NavLink to={ROUTES.HOME}>Search engine</NavLink>
      </LinkItem>
    </NavigationWrapper>
  </SidebarWrapper>
);

Sidebar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

const NavigationWrapper = styled.nav`
  width: 100%;
`;

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: row;
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
    width: 200px;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 250px;
    padding: 40px 32px;
  }
`;

export default Sidebar;
