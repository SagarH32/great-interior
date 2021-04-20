import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Banner = ({ children }) => {
  return (
    <>
      <Jumbotron className='bg-secondary rounded-0 text-white'>
        {children}
      </Jumbotron>
    </>
  );
};

export default Banner;
