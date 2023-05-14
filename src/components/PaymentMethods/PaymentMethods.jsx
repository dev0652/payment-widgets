import { Button } from './PaymentMethods.styled';
import { paymentMethods } from '../../constants/paymentMethods';

export const PaymentMethods = ({ selectedMethod, onSelect }) => {
  const { mastercard, visa, applepay } = paymentMethods;

  return (
    <>
      <Button
        selected={selectedMethod === mastercard}
        onCLick={() => onSelect(mastercard)}
      >
        Mastercard
      </Button>
      <Button selected={selectedMethod === visa} onCLick={() => onSelect(visa)}>
        Visa
      </Button>
      <Button
        selected={selectedMethod === applepay}
        onCLick={() => onSelect(applepay)}
      >
        Apple Pay
      </Button>
    </>
  );
};
