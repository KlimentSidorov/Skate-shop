import React, { useState } from 'react';
import './PaymentDetails.css';
import { useAuth0 } from '@auth0/auth0-react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCartContext } from '../context/cart_context';
import { dbp } from '../firebase';
import swal from '@sweetalert/with-react';

const PaymentDetails = () => {
  const { user, isAuthenticated } = useAuth0();
  const { total_amount, shipping_fee, cart, clearCart } = useCartContext();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);

  const totalPrice = total_amount + shipping_fee;
  const totalAmount = totalPrice / 100;

  const stripe = useStripe();
  const elements = useElements();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      dbp
        .collection('product')
        .add({
          name: user.name,
          email: user.email,
          address: address,
          city: city,
          country: country,
          paymentMethod: paymentMethod,
          product: cart,
          totalamount: totalAmount,
        })
        .then(() => {
          setLoading(false);
          swal({
            icon: 'success',
            content: (
              <div>
                <h3>Thank You for Shopping With us!!!</h3>

                <button type='button' className='btn-primary'>
                  <a
                    className='linkSwal'
                    href='https://reactskateshop.netlify.app'
                  >
                    close
                  </a>
                </button>
              </div>
            ),
            buttons: false,
          });
          clearCart();
        })
        .catch((error) => {
          alert(error.message);
          setLoading(false);
        });
    }
  };

  const cardElementOpts = {
    iconStyle: 'solid',

    hidePostalCode: true,
  };

  return (
    isAuthenticated && (
      <div>
        <form className='formPd' onSubmit={handleFormSubmit}>
          <h1>shipping and payment</h1>
          <label>Name</label>
          <input value={user.name} />
          <label>Email</label>
          <input value={user.email} />
          <label>Address</label>
          <input
            placeholder='Address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <label>City</label>
          <input
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label>Country</label>
          <input
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <label>Card Details</label>
          <div className='proba'>
            <CardElement options={cardElementOpts} />
          </div>

          <button type='submit' disabled={!stripe} className='btn btn-primary'>
            Pay
          </button>
        </form>
      </div>
    )
  );
};

export default PaymentDetails;
