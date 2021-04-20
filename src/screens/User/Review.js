import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/Global/Message';
import ReviewForm from '../../components/User/ReviewForm';
import Sidebar from '../../components/User/Sidebar';
import { submitReview } from '../../redux/actions/reviewActions';

const Review = () => {
  const { success, error } = useSelector((state) => state.rootReview);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(1);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '' || designation === '') {
      setMessage('Field should not be empty');
    } else {
      dispatch(submitReview({ name, designation, description, rating }));
    }
  };
  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={6}>
          <div className='py-5'>
            {error && <Message>{error}</Message>}
            {message && <Message>{message}</Message>}
            {success ? (
              <Message>{success}</Message>
            ) : (
              <ReviewForm
                name={name}
                setName={setName}
                designation={designation}
                setDesignation={setDesignation}
                description={description}
                setDescription={setDescription}
                rating={rating}
                setRating={setRating}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Review;
