import styled from 'styled-components/macro';

const Button = styled.button`
  outline: 0;
  border-radius: ${({ small }) => (small ? '4px' : '8px')};;
  border: 1px solid ${({ theme }) => theme.color.primary};
  padding: ${({ small }) => (small ? '4px 12px' : '8px 32px')};
  background-color: ${({ secondary, theme }) => (secondary ? 'transparent' : theme.color.primary)};
  color: ${({ secondary, theme }) => (secondary ? theme.color.primary : theme.color.white)};
  font-weight: 600;
  font-size: ${({ small }) => (small ? '1.2rem' : '1.4rem')};
  cursor: pointer;
  transition: all .2s ease-in;
  white-space: nowrap;

  &:hover{
    background-color: ${({ secondary, theme }) => (secondary ? theme.color.primary : theme.color.white)};
    color: ${({ secondary, theme }) => (secondary ? theme.color.white : theme.color.primary)};
  }
`;

export default Button;
