import React, { useState } from 'react';
import './Contact.css';
import Footer from '../components/Footer';
import { db } from '../firebase';
import swal from 'sweetalert';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    db.collection('contacts')
      .add({
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then(() => {
        setLoading(false);
        swal({
          title: 'Thank you for your message!',
          text: 'We will answer you shortly',
          icon: 'success',
          button: 'close',
        });
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <h1>Contact Us </h1>

        <label>Name</label>
        <input
          placeholder='Name'
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone</label>
        <input
          placeholder='Your Phone Number'
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder='Email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder='Message'
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
