import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const active = window.location.pathname;
  return (
    <>
      <Nav
        defaultActiveKey='/admin/orders'
        className='flex-column bg-dark dashboard__nav'
      >
        <Container>
          <Nav.Item>
            <Link
              className={`nav-link ${
                active === `/admin/orders` && `active__sidebar`
              }`}
              to='/admin/orders'
            >
              Order List
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link d-flex align-items-center ${
                active === `/admin/addservice` && `active__sidebar`
              }`}
              to='/admin/addservice'
            >
              Add Service
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link d-flex align-items-center ${
                active === `/admin/users` && `active__sidebar`
              }`}
              to='/admin/users'
            >
              Make Admin
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link d-flex align-items-center ${
                active === `/admin/manage-services` && `active__sidebar`
              }`}
              to='/admin/manage-services'
            >
              Manage services
            </Link>
          </Nav.Item>
        </Container>
      </Nav>
    </>
  );
};

export default Sidebar;
