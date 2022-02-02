import React from 'react';
import { Button, Modal } from 'react-bootstrap';

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
                  <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                              <h1>Booking Infromation</h1>
                        </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <div>
                              <h2 style={{ color: 'red' }}>From : {from}</h2>
                              <h2 style={{ color: 'green' }}>To : {to}</h2>
                              <p>Departure: {date}</p>
                              <br />
                              <p>Return: {back}</p>

                              <h3>Total Passenger: {total}</h3>

                              <h6>Voucehr: {voucher}</h6>

                        </div>
                  </Modal.Body>
                  <Modal.Footer>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
                  </Modal.Footer>
            </Modal>
      );
};

export default ModalShow;