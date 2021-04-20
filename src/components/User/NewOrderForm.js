import React from 'react';
import { Form } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from '../Global/Payment';
const NewOrderForm = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  handleSubmit,
}) => {
  const stripePromise = loadStripe(
    'pk_test_51IfA1YD3Dib1QGGLZ5qOUIwXMuXyiGaH2uegVrHNEnLET183rpvqdbyjEiKQjeHQfIigBHu7PrdcMclW2X6pXCpd00iJjq2xmB'
  );
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='title'>
          <Form.Control
            type='text'
            className='review__name'
            placeholder='Service Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='price'>
          <Form.Control
            type='number'
            className='review__designation'
            placeholder='$'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='textbox'>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Description'
            className='review__description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Elements stripe={stripePromise}>
        <Payment submitForm={handleSubmit} />
      </Elements>
    </>
  );
};

export default NewOrderForm;
