import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IrQFVCvmBWlSg24wktyWEC2C6MxnwWhybfUCAOkOsKJVdf53wdjy05P8WE6EilBIVrvll3fyaejNYuUMQVChqfY00aGhPKHoi';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      currency='GBP'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
