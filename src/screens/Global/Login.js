import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../../components/Global/Banner';
import LoginForm from '../../components/Global/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../redux/actions/userActions';
import Message from '../../components/Global/Message';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo, error } = useSelector((state) => state.rootLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userInfo && userInfo.user.isAdmin === false) {
      history.push('/dashboard');
    }
    if (userInfo && userInfo.user.isAdmin) {
      history.push('/admin/orders');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
  };
  return (
    <>
      <Banner>
        <Container>
          <h1>Login</h1>
        </Container>
      </Banner>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            {error && <Message>{error}</Message>}
            <LoginForm
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
