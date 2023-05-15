import React, { Component } from 'react';
import { ButtonsWrapper, Container, FormWrapper } from './PaymentWidget.styled';

import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import { paymentMethods } from '../../constants/paymentMethods';

import { VisaPaymentForm } from '../VisaPaymentForm/VisaPaymentForm';

import { MasterCardPaymentForm } from '../MasterCardPaymentForm/MasterCardPaymentForm';

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

    // const { applepay, visa } = paymentMethods;

    return (
      <Container>
        <ButtonsWrapper>
          <PaymentMethods
            selected={selectedMethod}
            onSelect={selectPaymentMethod}
          />
        </ButtonsWrapper>

        <FormWrapper>
          {selectedMethod === visa && <VisaPaymentForm />}

          {selectedMethod === mastercard && <MasterCardPaymentForm />}

          {selectedMethod === applepay && <div>ApplepayForm</div>}
        </FormWrapper>
      </Container>
    );
  }
}
