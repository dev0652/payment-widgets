import { Button } from './PaymentMethods.styled';
import { paymentMethods } from '../../constants/paymentMethods';

export const PaymentMethods = ({ selected, onSelect }) => {
  const { mastercard, visa, applepay } = paymentMethods;

  return (
    <>
      <Button selected={selected === mastercard} onClick={onSelect(mastercard)}>
        Mastercard
      </Button>
      <Button selected={selected === visa} onClick={onSelect(visa)}>
        Visa
      </Button>
      <Button selected={selected === applepay} onClick={onSelect(applepay)}>
        Apple Pay
      </Button>
    </>
  );
};
