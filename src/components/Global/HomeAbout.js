import React from 'react';
import about from '../../images/about.jpg';
import { Col, Image, Row } from 'react-bootstrap';

const HomeAbout = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <Image src={`${about}`} />
        </Col>
        <Col md={8}>
          <div className='home__about__company px-5'>
            <h6 className='text-left text-warning'>ABOUT COMPANY</h6>
            <h1 className='big__heading text-left'>
              <strong className='text-warning'>
                A SMALL EFFICIENT INTERIOR
              </strong>{' '}
              DESIGNING TEAM
            </h1>
            <p className=''>
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment,
              so blinded by desire, that they cannot foresee the pain and
              trouble that are bound.
            </p>
            <p>
              Indignation and dislike men who are so beguiled and demoralized by
              the charms pleasure of the moment, so blinded by desire, that they
              cannot foresee.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomeAbout;
