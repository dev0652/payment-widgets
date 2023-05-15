import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'isNumeric', function () {
  return this.matches(/^\d+$/, 'The field must have digits only');
});

export const paymentSchema = Yup.object({
  cardHolder: Yup.string().required(),
  cardNumber: Yup.string().isNumeric().length(16).required(),
  cvv: Yup.string().isNumeric().length(3).required(),
});
