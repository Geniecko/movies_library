import styled from 'styled-components/macro';

const LinkItem = styled.div`
  width: 100%;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 250px;
    margin-left: auto;
  }
`;

export default LinkItem;
