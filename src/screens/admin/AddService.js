import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ServiceForm from '../../components/admin/ServiceForm';
import Sidebar from '../../components/admin/Sidebar';
import { createServiceAction } from '../../redux/actions/serviceActions';

const AddService = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createServiceAction({ title, price, description }));
  };
  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={6}>
          <div className='py-5'>
            <ServiceForm
              title={title}
              description={description}
              price={price}
              handleSubmit={handleSubmit}
              setPrice={setPrice}
              setDescription={setDescription}
              setTitle={setTitle}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AddService;
