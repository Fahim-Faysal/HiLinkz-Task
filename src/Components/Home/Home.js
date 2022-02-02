import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Department from '../Department/Department';
import FinalForm from '../FinalForm/FinalForm';
import From from '../From/From';
import ModalShow from '../ModalShow/ModalShow';
import Passenger from '../Passenger/Passenger';
import Radio from '../RadioButtons/Radio';
import Return from '../Return/Return';
import Submitform from '../Submitform/Submitform';
import To from '../To/To';
import Voucher from '../Voucher/Voucher';

const Home = () => {
      const [from, setFrom] = useState('')
      const [to, setTo] = useState('')
      const [date, setDate] = useState('')
      const [back, setBack] = useState('')
      let [total, setTotal] = useState(1)
      const [radio, setRadio] = useState('Round Trip')
      const [voucher, setVoucher] = useState('')
      const [modalshow, setModalShow] = useState(false)
      return (
            <>
                  <div style={{ marginTop: '20px' }}>
                        <h1 style={{ marginBottom: '40px', fontSize: '70px', color: 'red', fontWeight: 'lighter' }}>Flight deals with Virgin Atlantic</h1>
                        <br />
                        <Radio radio={radio} setRadio={setRadio} />
                        <Row >
                              <Col md={3} lg={4}><From from={from} setFrom={setFrom} /></Col>
                              <Col md={3} lg={4}><To to={to} setTo={setTo} /></Col>
                              <Col md={3} lg={2}><Department date={date} setDate={setDate} /></Col>
                              <Col md={3} lg={2}><Return radio={radio} setRadio={setRadio} back={back} setBack={setBack} /></Col>

                              {/* {
                                    radio !== "One way" &&
                                    <Col md={3} lg={2}><Return radio={radio} setRadio={setRadio} back={back} setBack={setBack} /></Col>
                              } */}

                        </Row>
                        <Row >
                              <Col md={3} lg={4}><Passenger total={total} setTotal={setTotal} /></Col>
                              <Col md={3} lg={4}><Voucher voucher={voucher} setVoucher={setVoucher} /></Col>
                              <Col md={6} lg={4}><FinalForm modalshow={modalshow} setModalShow={setModalShow} /></Col>
                        </Row>
                  </div>
                  <Submitform />

                  <ModalShow from={from} to={to} back={back} voucher={voucher} date={date} total={total} setModalShow={setModalShow} show={modalshow} />
            </>
      );
};

export default Home;