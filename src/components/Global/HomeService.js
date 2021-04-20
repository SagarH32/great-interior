import React from 'react';
import { Link } from 'react-router-dom';

const HomeService = ({ service }) => {
  return (
    <>
      <div className='home__service my-3'>
        <Link to={`/service/order/${service._id}`}>
          <h4 className='home__service__title font-weight-bold'>
            {service.title}
          </h4>
          <p className='home__service__description'>{service.description}</p>
          <h5 className='home__service__description'>${service.price}</h5>
        </Link>
      </div>
    </>
  );
};

export default HomeService;
