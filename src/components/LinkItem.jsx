import styled from 'styled-components/macro';

const LinkItem = styled.div`
  width: 100%;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 4px;

  a {
    border-radius: 4px;
    width: 100%;
    display: block;
    background-color: ${({ theme }) => theme.color.primary};
    padding: 8px 12px;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.5px;
    color: red;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.white};
    transition: 0.2s ease-in;

    &:hover {
      opacity: .8;
    }

    &.active {
      background-color: ${({ theme }) => theme.color.grey};
      color: ${({ theme }) => theme.color.secondary};
      font-weight: 700;
      transform: translateX(8px);
    }
  }
`;

export default LinkItem;
