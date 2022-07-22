import React from 'react';
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';

const Headline = styled.h1`
  color: ${({ color }) => color || 'green'};
`;

function App() {
  return (
    <>
      <Headline>Hello</Headline>
      <Headline>Hello</Headline>
      <FaBeer />
    </>
  );
}

export default App;
