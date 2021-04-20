import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import NewOrderForm from '../../components/User/NewOrderForm';
import Sidebar from '../../components/User/Sidebar';
import { createOrderAction } from '../../redux/actions/orderActions';
import { singleServiceAction } from '../../redux/actions/serviceActions';
const NewOrder = ({ match }) => {
  const dispatch = useDispatch();
  const { service } = useSelector((state) => state.getSingleService);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    dispatch(singleServiceAction(match.params.id));
    // eslint-disable-next-line
    setTitle(service.title);
    // eslint-disable-next-line
    setPrice(service.price);
    // eslint-disable-next-line
    setDescription(service.description);
  }, [dispatch, match]);
  const handleSubmit = () => {
    dispatch(createOrderAction({ title, price, description }));
  };
  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={6}>
          <div className='py-5'>
            <NewOrderForm
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              price={price}
              setPrice={setPrice}
              handleSubmit={handleSubmit}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default NewOrder;
