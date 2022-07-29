import styled from 'styled-components/macro';

const Input = styled.input`
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  border: 1px solid ${({ theme, secondary }) => (secondary ? theme.color.white : theme.color.primary)};
  outline: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme, secondary }) => (secondary ? theme.color.white : theme.color.primary)};

  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
    font-weight: 300;
    font-size: 1.4rem;
  }
`;

export default Input;
