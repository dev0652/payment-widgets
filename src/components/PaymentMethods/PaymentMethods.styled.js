import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: 5px;
  min-width: 60px;
  text-align: center;

  color: ${({ theme, selected }) => {
    return selected ? theme.colors.white : 'normal';
  }};

  background-color: ${({ theme, selected }) => {
    return selected ? theme.colors.black : 'transparent';
  }};
`;
