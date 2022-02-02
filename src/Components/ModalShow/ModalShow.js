import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { MdFlightTakeoff } from "react-icons/md";

const ModalShow = ({ from, to, voucher, back, date, total, show, setModalShow }) => {

      if (!show) {
            return null
      }

      return (
            <Modal
                  show={show}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
            >
                  <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                              <h1>Booking Infromation</h1>
                        </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <div>
                              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                                    <h1 style={{ color: 'green' }}>{from}</h1>
                                    <span style={{ fontSize: '60px', color: 'red' }}><MdFlightTakeoff /></span>
                                    <h1 style={{ color: 'green' }}>{to}</h1>
                              </div>
                              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <h2>Departure: {date}</h2>

                                    <h2>Return: {back}</h2>

                                    <h3 style={{ color: 'red' }}>Total Passenger: {total}</h3>

                                    <h3>Voucehr: {voucher}</h3>

                              </div>
                        </div>
                  </Modal.Body>
                  <Modal.Footer>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
                  </Modal.Footer>
            </Modal>
      );
};

export default ModalShow;