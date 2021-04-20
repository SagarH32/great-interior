import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import HomeAbout from '../../components/Global/HomeAbout';
import HomeBanner from '../../components/Global/HomeBanner';
import HomeCard from '../../components/Global/HomeCard';
import HomeService from '../../components/Global/HomeService';
import { getServiceAction } from '../../redux/actions/serviceActions';

const Home = () => {
  const dispatch = useDispatch();
  const getServices = useSelector((state) => state.getServices);
  const { service } = getServices;

  useEffect(() => {
    dispatch(getServiceAction());
  }, [dispatch]);

  return (
    <div>
      <HomeBanner />
      <Container>
        <Row className='mb-5'>
          <Col md={4}>
            <HomeCard
              title='Concept Designs'
              description='Indignation dislike who are beguile works & demoralized the charms.'
            />
          </Col>
          <Col md={4}>
            <HomeCard
              title='Project Designs'
              description='Our power of choice is untrammelled and all nothing prevents best.'
            />
          </Col>
          <Col md={4}>
            <HomeCard
              title='Make Overs'
              description='Every pleasure is to be welcomed & every circumstances & owing power.'
            />
          </Col>

          <div className='about__section my-5'>
            <HomeAbout />
          </div>
          <div className='service__section w-100'>
            <h2 className='font-weight-bold my-3 text-center'>Services</h2>
            <Row>
              {service.map((item) => (
                <Col md={4} key={item._id}>
                  <HomeService service={item} />
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
