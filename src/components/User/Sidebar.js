import React from 'react';
import { Container, Nav } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  // const { userInfo } = useSelector((state) => state.rootLogin);
  const active = window.location.pathname;
  return (
    <>
      <Nav
        defaultActiveKey='/dashboard'
        className='flex-column bg-dark dashboard__nav'
      >
        <Container>
          <h5 className='font-weight-bold text-success text-left'>
            {/* {userInfo.user.name.slice(0, 16)} */}
          </h5>

          <Nav.Item>
            <Link
              className={`nav-link ${
                active === `/service/order` && `active__sidebar`
              }`}
              to='/service/order'
            >
              Book Service
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link ${
                active === `/dashboard` && `active__sidebar`
              }`}
              to='/dashboard'
            >
              Your Bookings
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              className={`nav-link d-flex align-items-center ${
                active === `/dashboard/review` && `active__sidebar`
              }`}
              to='/dashboard/review'
            >
              Review
            </Link>
          </Nav.Item>
        </Container>
      </Nav>
    </>
  );
};

export default Sidebar;
