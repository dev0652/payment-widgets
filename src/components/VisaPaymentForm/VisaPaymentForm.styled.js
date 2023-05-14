import { styled } from 'styled-components';
import { Form as StyledForm, ErrorMessage as ErrorMsg } from 'formik';

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const ErrorMessage = styled(ErrorMsg)`
  color: ${props => props.theme.colors.red};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 4px;
`;

export const Button = styled.button``;
