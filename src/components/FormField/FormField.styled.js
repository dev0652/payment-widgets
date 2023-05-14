import { styled } from 'styled-components';
import { ErrorMessage as ErrorMsg } from 'formik';

export const ErrorMessage = styled(ErrorMsg)`
  color: ${props => props.theme.colors.red};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  gap: 4px;
`;
