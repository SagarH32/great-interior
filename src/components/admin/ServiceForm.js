import React from 'react';
import { Form } from 'react-bootstrap';

const ServiceForm = ({
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  handleSubmit,
}) => {
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
            className='review__name'
            placeholder='Service Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='textbox'>
          <Form.Control
            as='textarea'
            rows={3}
            placeholder='Service Description'
            className='review__description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <button className='btn btn-warning '>Add Service</button>
      </Form>
    </>
  );
};

export default ServiceForm;
