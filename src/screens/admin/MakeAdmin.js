import React, { useEffect } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/admin/Sidebar';
import {
  allUsersAction,
  makeAdminAction,
} from '../../redux/actions/userActions';

const MakeAdmin = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.rootAllUsers);

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(makeAdminAction(id));
  };

  useEffect(() => {
    dispatch(allUsersAction());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={{ span: 8, offset: 1 }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>EMAIL</th>
                <th>NAME</th>
                <th>ROLE</th>
                <th>MAKE ADMIN</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.isAdmin ? 'Admin' : 'User'}</td>

                  <td>
                    <button
                      onClick={(e) => handleClick(e, user._id)}
                      className='btn btn-warning'
                      disabled={user.isAdmin}
                    >
                      Make Admin
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default MakeAdmin;
