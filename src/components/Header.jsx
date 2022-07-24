import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Header = ({ title, subtitle, position }) => (
  <HeaderWrapper position={position}>
    <h1>{title}</h1>
    {{ subtitle } && <h3>{subtitle}</h3>}
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  width: 100%;
  text-align: ${({ position }) => position};

  h1 {
    font-weight: 300;
    margin-bottom: 8px;
  }

  h3 {
    color: ${({ theme }) => theme.color.primary};
  }
`;

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  position: PropTypes.string,
};

Header.defaultProps = {
  subtitle: '',
  position: 'left',
};

export default Header;
