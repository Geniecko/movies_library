import styled from 'styled-components';

function App() {
  return (
    <>
      <Headline>Hello</Headline>
    </>
  );
}

const Headline = styled.h1`
  color: ${({ color }) => (color ? color : 'green')};
`;

export default App;
