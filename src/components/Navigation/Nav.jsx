import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import Logo from '../Logo';
import LinkItem from './LinkItem';
import Link from './Link';
import { ROUTES } from '../../constants/routes';

const Sidebar = ({ isLogged }) => (
  <SidebarWrapper>
    <Logo />
    <NavigationWrapper>
      {/* {isLogged && (
        <LinkItem>
          <Link as={NavLink} to={ROUTES.USER}>Edit profile</Link>
        </LinkItem>
      )} */}
      {isLogged && (
        <LinkItem>
          <Link as={NavLink} to={ROUTES.WATCH_LIST}>Watch list</Link>
        </LinkItem>
      )}
      {isLogged && (
        <LinkItem>
          <Link as={NavLink} to={ROUTES.FAVOURITES}>Favourites</Link>
        </LinkItem>
      )}
      {isLogged && (
        <LinkItem>
          <Link as={NavLink} to={ROUTES.RATED}>rated</Link>
        </LinkItem>
      )}
      {isLogged && (
        <LinkItem>
          <Link as={NavLink} to={ROUTES.WATCHED}>watched</Link>
        </LinkItem>
      )}
      {!isLogged && (
        <LinkItem>
          <Link as={NavLink} to={ROUTES.LOGIN}>Sign in</Link>
        </LinkItem>
      )}
      {!isLogged && (
        <LinkItem>
          <Link as={NavLink} to={ROUTES.REGISTER}>Create account</Link>
        </LinkItem>
      )}
      <LinkItem>
        <Link as={NavLink} end to={ROUTES.MOVIES}>Search engine</Link>
      </LinkItem>
    </NavigationWrapper>
  </SidebarWrapper>
);

Sidebar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

const NavigationWrapper = styled.nav`
  display: none;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
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
