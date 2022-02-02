import React, { useState } from 'react';
import { ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';


const Passenger = ({ total, setTotal }) => {
      // let [total, setTotal] = useState(1)
      let [acount, setaCount] = useState(1)
      let [ycount, setyCount] = useState(0)
      let [ccount, setcCount] = useState(0)
      let [icount, setiCount] = useState(0)



      const Adultincrease = () => {
            setaCount(acount += 1)
            setTotal(total += 1)
      }
      const Adultdecrease = () => {
            if (acount < 1) {
                  return
            }
            setaCount(acount -= 1)
            setTotal(total -= 1)
      }
      const yincrease = () => {
            setyCount(ycount += 1)
            setTotal(total += 1)
      }
      const ydecrease = () => {
            if (ycount < 1) {
                  return
            }
            setyCount(ycount -= 1)
            setTotal(total -= 1)
      }
      const cincrease = () => {
            setcCount(ccount += 1)
            setTotal(total += 1)
      }
      const cdecrease = () => {
            if (ccount < 1) {
                  return
            }
            setcCount(ccount -= 1)
            setTotal(total -= 1)
      }
      const iincrease = () => {
            setiCount(icount += 1)
            setTotal(total += 1)
      }
      const idecrease = () => {
            if (icount < 1) {
                  return
            }
            setiCount(icount -= 1)
            setTotal(total -= 1)
      }


      return (
            <>

                  <div style={{ minWidth: '25%', marginLeft: '10px' }}>
                        <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }} >Passengers/travel class</label>

                        <div>
                              <DropdownButton
                                    style={{ width: '100%', border: '2px solid black' }}
                                    variant='light'
                                    as={ButtonGroup}
                                    title={`${total} passenger, Economy`}
                                    id="dropdown-menu-align-responsive-1"
                              >
                                    <div className='bg-white text-center h-auto' style={{ width: '450px' }}>
                                          <div className='d-flex justify-content-around align-items-center w-100 '>
                                                <div className='text-start'>
                                                      <h5>Adult</h5>
                                                      <p>Age 16 and over</p>
                                                </div>
                                                <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                      <button onClick={Adultdecrease}>-</button>
                                                      <input style={{ width: '30px', textAlign: 'center' }} type="text" value={acount} />
                                                      <button onClick={Adultincrease}>+</button>
                                                </div>
                                          </div>

                                    </div>

                                    <div className='bg-white text-center h-auto' style={{ width: '450px' }}>
                                          <div className='d-flex justify-content-around align-items-center w-100 '>
                                                <div className='text-start'>
                                                      <h5>Young Adult</h5>
                                                      <p>Age 12 - 15</p>
                                                </div>
                                                <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                      <button onClick={ydecrease}>-</button>
                                                      <input className='text-center' style={{ width: '30px' }} type="text" value={ycount} />
                                                      <button onClick={yincrease}>+</button>
                                                </div>

                                          </div>
                                    </div>

                                    <div className='d-flex justify-content-around align-items-center w-100 '>
                                          <div className='text-start'>
                                                <h5>Child</h5>
                                                <p>Age 2 - 11</p>
                                          </div>
                                          <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                <button onClick={cdecrease}>-</button>
                                                <input className='text-center' style={{ width: '30px' }} type="text" value={ccount} />
                                                <button onClick={cincrease}>+</button>
                                          </div>
                                    </div>

                                    <div className='d-flex justify-content-around align-items-center w-100 '>
                                          <div className='text-start'>
                                                <h5>Infant</h5>
                                                <p>Age up to 2</p>
                                          </div>
                                          <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                <button onClick={idecrease}>-</button>
                                                <input className='text-center' style={{ width: '30px' }} type="text" value={icount} />
                                                <button onClick={iincrease}>+</button>
                                          </div>
                                    </div>

                              </DropdownButton>

                        </div>

                  </div>
            </>

      );
};

export default Passenger;