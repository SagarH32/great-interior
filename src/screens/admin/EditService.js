import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  serviceUpdateAction,
  singleServiceAction,
} from '../../redux/actions/serviceActions';

const EditService = ({ match }) => {
  const dispatch = useDispatch();
  const { service } = useSelector((state) => state.getSingleService);

  const [title, setTitle] = useState(service.title);
  const [price, setPrice] = useState(service.price);
  const [description, setDescription] = useState(service.description);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      serviceUpdateAction(match.params.id, {
        title,
        description,
        price,
      })
    );
  };
  useEffect(() => {
    dispatch(singleServiceAction(match.params.id));
    // setPrice(service.price);
    // setTitle(service.title);
    // setDescription(service.description);
  }, [dispatch, match]);

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className='my-5'>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='title'>
                  <Form.Control
                    type='text'
                    placeholder='Service Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId='price'>
                  <Form.Control
                    type='number'
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>

                <button className='btn btn-warning '>Update</button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditService;
