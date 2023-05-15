import { Formik } from 'formik';
import { paymentSchema } from 'validation';

import { Button, Form } from './MasterCardPaymentForm.styled';
import { FormField } from 'components/FormField/FormField';

// #############################################################

const initialValues = { cardHolder: '', cardNumber: '', cvv: '' };

// #############################################################

export const MasterCardPaymentForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.isSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={paymentSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        // Look up: Render Prop pattern
        // Here, in particular, it is used to disable the submit button while form is being submitted
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
      )}
    </Formik>
  );
};
