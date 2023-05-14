import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Form } from './VisaPaymentForm.styled';

import { FormField } from '../FormField/FormField';
// #############################################################

const initialValues = { cardHolder: '', cardNumber: '', cvv: '' };

const validationSchema = Yup.object({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string().isNumeric().length(16).required(),
  cvv: Yup.string().isNumeric().length(3).required(),
});

Yup.addMethod(Yup.string, 'isNumeric', function () {
  return this.matches(/^\d+$/, 'The field must have digits only');
});

// #############################################################

export const VisaPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => actions.isSubmitting(false), 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => {
        // Look up: Render Prop pattern
        // Here, in particular, it is used to disable the submit button while form is being submitted
        return (
          <Form>
            {/* Card holder */}
            <FormField label="Card holder" name="cardHolder" />

            {/* Card number */}
            <FormField label="Card number" name="cardNumber" type="number" />

            {/* CVV */}
            <FormField label="CVV" name="cvv" type="number" />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending your payment' : 'Pay'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
