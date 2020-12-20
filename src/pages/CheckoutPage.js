import React from 'react';
import { PaymentDetails } from '../components';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51HxBBJHLvPytyFnu1DuY3pKXyeaULhsN7mfXjGl6s4tcp6dPLD1r2JVEwLjYaVx8i1001EmJL1Ke8dMqd7P1v7Em00AQXRtnh4'
);

const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentDetails />
    </Elements>
  );
};

export default CheckoutPage;
