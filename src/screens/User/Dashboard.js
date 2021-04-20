import React, { useEffect } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../../components/User/Sidebar';
import { getOrderAction } from '../../redux/actions/orderActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.rootUserOrders);

  useEffect(() => {
    dispatch(getOrderAction());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>
        <Col md={10}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>SERVICE</th>
                <th>PRICE</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>$ {item.price}</td>
                  <td>{item.isDelivered ? 'Delivered' : 'Pending'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
