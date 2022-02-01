import React, { useState } from 'react';
import { ImLocation } from "react-icons/im";
import FinalForm from '../FinalForm/FinalForm';
import Home from '../Home/Home';
import ModalShow from '../ModalShow/ModalShow';


const From = ({ form, setFrom }) => {

      return (
            <>
                  <div style={{ minWidth: '25%', marginLeft: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                              <span style={{ paddingTop: '20px', paddingLeft: '10px', position: 'absolute' }}><ImLocation /></span>

                              <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }}>
                                    From
                                    <input style={{ width: "100%", height: "40px", paddingLeft: '30px', backgroundColor: 'rgb(246,248,252' }} placeholder='Select departure' type="text"
                                          value={form} onChange={(e) => setFrom(e.target.value)} />
                              </label>
                        </div>
                  </div >

            </>

      );
};

export default From;