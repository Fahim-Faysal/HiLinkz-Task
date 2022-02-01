import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Department from '../Department/Department';
import FinalForm from '../FinalForm/FinalForm';
import From from '../From/From';
import Passenger from '../Passenger/Passenger';
import Radio from '../RadioButtons/Radio';
import Return from '../Return/Return';
import To from '../To/To';
import Voucher from '../Voucher/Voucher';

const Home = () => {
      return (
            <>
                  <div style={{ marginTop: '120px' }}>
                        <h1 style={{ marginBottom: '40px', fontSize: '70px', color: 'red', fontWeight: 'lighter' }}>Flight deals with Virgin Atlantic</h1>
                        <br />
                        <Radio />
                        <Row >
                              <Col md={3} lg={4}><From /></Col>
                              <Col md={3} lg={4}><To /></Col>
                              <Col md={3} lg={2}><Department /></Col>
                              <Col md={3} lg={2}><Return /></Col>
                        </Row>
                        <Row >
                              <Col md={3} lg={4}><Passenger /></Col>
                              <Col md={3} lg={4}><Voucher /></Col>
                              <Col md={6} lg={4}><FinalForm /></Col>
                        </Row>
                  </div>
            </>
      );
};

export default Home;