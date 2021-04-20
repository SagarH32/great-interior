import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ title, description }) => {
  return (
    <>
      <div className='home__card'>
        <div className='home__card__body'>
          <h4 className='home__card__title font-weight-bold'>{title}</h4>
          <p className='home__card__description'>{description}</p>
          <Link className='home__card__link text-warning font-weight-bold'>
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
