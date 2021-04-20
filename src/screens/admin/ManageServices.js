import React, { useEffect } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import {
  getServiceAction,
  serviceDeleteAction,
} from '../../redux/actions/serviceActions';

const ManageServices = () => {
  const { service } = useSelector((state) => state.getServices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServiceAction());
  }, [dispatch]);

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(serviceDeleteAction(id));
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
                  <th>TITLE</th>
                  <th>PRICE</th>
                  <th>DESCRIPTION</th>
                  <th>MANAGE</th>
                </tr>
              </thead>
              <tbody>
                {service.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>

                    <td>
                      <Link
                        o
                        className='btn btn-dark mx-2'
                        to={`/service/edit/${item._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className='btn btn-danger'
                        onClick={(e) => handleClick(e, item._id)}
                      >
                        Delete
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

export default ManageServices;
