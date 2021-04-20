import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../../redux/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.rootLogin);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar bg='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Great-Interior</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo &&
                userInfo !== null &&
                userInfo.user.isAdmin === false && (
                  <>
                    {' '}
                    <LinkContainer to='/dashboard'>
                      <Nav.Link href=''>Dashboard</Nav.Link>
                    </LinkContainer>
                    <span className='nav-link' onClick={handleLogout}>
                      Logout
                    </span>{' '}
                  </>
                )}
              {userInfo && userInfo !== null && userInfo.user.isAdmin && (
                <>
                  <LinkContainer to='/admin/orders'>
                    <Nav.Link href=''> Admin Dashboard</Nav.Link>
                  </LinkContainer>
                  <span className='nav-link' onClick={handleLogout}>
                    Logout
                  </span>
                </>
              )}

              {userInfo === null && (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link href=''>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link href=''>Register</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
