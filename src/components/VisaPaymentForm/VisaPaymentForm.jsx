import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Label, Form, ErrorMessage } from './VisaPaymentForm.styled';

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
            <Label>
              <span>Card holder</span>
              <Field name="cardHolder" type="text" />
              <ErrorMessage name="cardHolder" component="span" />
            </Label>

            {/* Card number */}
            <Label>
              <span>Card number</span>
              <Field name="cardNumber" type="number" />
              <ErrorMessage name="cardNumber" component="span" />
            </Label>

            {/* CVV */}
            <Label>
              <span>CVV</span>
              <Field name="cvv" type="number" />
              <ErrorMessage name="cvv" component="span" />
            </Label>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending your payment' : 'Pay'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
