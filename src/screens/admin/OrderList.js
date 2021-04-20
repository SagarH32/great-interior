import React, { useEffect } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/admin/Sidebar';
import {
  allOrderAction,
  updateStatusAction,
} from '../../redux/actions/orderActions';

const OrderList = () => {
  const { orderList } = useSelector((state) => state.rootAllOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allOrderAction());
  }, [dispatch]);

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(updateStatusAction(id));
  };

  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <div className='py-5'>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>SERVICE</th>
                  <th>PRICE</th>
                  <th>EMAIL</th>
                  <th>USERNAME</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.service}</td>
                    <td>{order.price}</td>
                    <td>{order.user.email}</td>
                    <td>{order.user.name}</td>
                    <td>
                      <button
                        onClick={(e) => handleClick(e, order._id)}
                        className='btn btn-success'
                        disabled={order.isDelivered}
                      >
                        mark as delivered
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrderList;
