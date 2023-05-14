import React, { Component } from 'react';
import { Container } from './PaymentWidget.styled';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import { paymentMethods } from '../../constants/paymentMethods';

// ##############################################################

export class PaymentWidget extends Component {
  state = {
    selectedMethod: null,
  };

  selectPaymentMethod = method => () => {
    this.setState({ selectedMethod: method });
  };

  render() {
    const {
      state: { selectedMethod },
      selectPaymentMethod,
    } = this;

    const { mastercard, visa, applepay } = paymentMethods;

    return (
      <Container>
        <PaymentMethods
          selected={selectedMethod}
          onSelect={selectPaymentMethod}
        />
        {selectedMethod === visa && <div>VisaForm</div>}
        {selectedMethod === mastercard && <div>MastercardForm</div>}
        {selectedMethod === applepay && <div>ApplepayForm</div>}
      </Container>
    );
  }
}
