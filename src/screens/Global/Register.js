import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Banner from '../../components/Global/Banner';
import RegisterForm from '../../components/Global/RegisterForm';
import { registerAction } from '../../redux/actions/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction({ name, email, password }));
  };
  return (
    <>
      <Banner>
        <Container>
          <h1>Register</h1>
        </Container>
      </Banner>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <RegisterForm
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
