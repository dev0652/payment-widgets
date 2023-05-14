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

    return (
      <Container>
        <PaymentMethods
          selectedMethod={selectedMethod}
          onSelect={selectPaymentMethod}
        />
        {selectedMethod === paymentMethods.visa && <div>VisaForm</div>}
        {selectedMethod === paymentMethods.mastercard && (
          <div>MastercardForm</div>
        )}
        {selectedMethod === paymentMethods.applepay && <div>ApplepayForm</div>}
      </Container>
    );
  }
}
