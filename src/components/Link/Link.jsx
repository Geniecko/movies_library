import styled from 'styled-components';

const Link = styled.a`
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg{
    margin: 0 4px;
    font-size: 1.6rem;
  }

  @media (hover: hover){
    &:hover {
      opacity: 0.8;
    }
  }

  &.active {
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 700;
    transform: translateX(8px);
  }
`;

export default Link;
