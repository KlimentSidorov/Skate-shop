import React, { useState } from 'react';
import '../Footer.css';
import { dbe } from '../../firebase';
import swal from 'sweetalert';

const EndSection = () => {
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dbe
      .collection('newsletter')
      .add({
        email: email,
      })
      .then(() => {
        setLoading(false);
        swal({
          title: 'Thank you !',
          text: 'For joining our newsletter',
          icon: 'success',
          button: 'close',
        });
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });

    setEmail('');
  };

  return (
    <div className='footer-containerEnd'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Skate Life Shop newsletter to receive all the new info for
          our products.
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form onSubmit={handleSubmit}>
            <input
              className='footer-input'
              name='email'
              type='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your Email'
            />
            <button className='btn btn-danger btnEnd'>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EndSection;
