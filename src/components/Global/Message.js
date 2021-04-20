import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ children }) => {
  return (
    <>
      <Alert variant='warning'>{children}</Alert>
    </>
  );
};

export default Message;
