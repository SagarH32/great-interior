import React from 'react';
import { Container } from 'react-bootstrap';
import banner from '../../images/banner.jpg';
const HomeBanner = () => {
  return (
    <div
      className='home__banner'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '560px',
        backgroundBlendMode: 'multiply',
      }}
    >
      <Container>
        <h1>Crafted Better</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          facilis placeat perferendis dicta fugiat quia debitis atque veritatis
          recusandae, voluptates, sequi esse vel. Ut reiciendis cupiditate
          similique, quia dicta quae?
        </p>
        <div className='btn btn-dark rounded'>About Company</div>
      </Container>
    </div>
  );
};

export default HomeBanner;
