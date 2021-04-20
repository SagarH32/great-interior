import React from 'react';
import { Form } from 'react-bootstrap';

const ReviewForm = ({
  name,
  setName,
  designation,
  setDesignation,
  description,
  setDescription,
  rating,
  setRating,
  handleSubmit,
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Control
            type='text'
            className='review__name'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='name'>
          <Form.Control
            type='text'
            className='review__designation'
            placeholder='Companies name,  Designation'
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
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
        <Form.Group>
          <Form.Label>How much star you want to give?</Form.Label>
          <Form.Control
            as='select'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            {[...Array(5).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <button className='btn btn-warning '>Submit</button>
      </Form>
    </>
  );
};

export default ReviewForm;
