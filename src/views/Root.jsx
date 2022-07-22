import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../templates/MainTemplate';

const Headline = styled.h1`
  color: ${({ theme }) => theme.color.primary || 'green'};
`;

const Root = () => (
  <MainTemplate>
    <Headline>asd</Headline>
  </MainTemplate>
);
export default Root;
