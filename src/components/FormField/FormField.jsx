import { Field } from 'formik';
import { Label, ErrorMessage } from './FormField.styled';

export const FormField = ({ label, name, type = 'text' }) => {
  return (
    <Label>
      {label && <span>{label}</span>}
      <Field name={name} type={type} />
      <ErrorMessage name={name} component="span" />
    </Label>
  );
};
