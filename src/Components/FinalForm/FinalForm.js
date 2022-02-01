import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalShow from '../ModalShow/ModalShow';

const FinalForm = ({ setModalShow }) => {


      return (
            <div>
                  <Button onClick={() => {

                        setModalShow(true);
                  }} style={{ minWidth: '90%', marginTop: '30px', marginLeft: '10px', height: "40px", paddng: '15px' }} variant="danger">Book Now</Button>


            </div>
      );
};

export default FinalForm;