import React from 'react';
import styled from 'styled-components';

const Headline = styled.h1`
  color: ${({ color }) => color || 'green'};
`;

function App() {
  return (
    <>
      <Headline>Hello</Headline>
      <Headline>Hello</Headline>
    </>
  );
}

export default App;
