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
            setaCount(acount -= 1)
            setTotal(total -= 1)
      }
      const yincrease = () => {
            setyCount(ycount += 1)
            setTotal(total += 1)
      }
      const ydecrease = () => {
            setyCount(ycount -= 1)
            setTotal(total -= 1)
      }
      const cincrease = () => {
            setcCount(ccount += 1)
            setTotal(total += 1)
      }
      const cdecrease = () => {
            setcCount(ccount -= 1)
            setTotal(total -= 1)
      }
      const iincrease = () => {
            setiCount(icount += 1)
            setTotal(total += 1)
      }
      const idecrease = () => {
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
                                    // align={{ lg: 'center' }}
                                    title={`${total} passenger, Economy`}
                                    id="dropdown-menu-align-responsive-1"
                              >
                                    <div style={{ backgroundColor: 'white', width: '450px', textAlign: 'center', height: 'auto' }}>
                                          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <div>
                                                      <h5>Adult</h5>
                                                      <p>Up to 25 age</p>
                                                </div>
                                                <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                      <button onClick={Adultdecrease}>-</button>
                                                      <input style={{ width: '30px', textAlign: 'center' }} type="text" value={acount} />
                                                      <button onClick={Adultincrease}>+</button>
                                                </div>
                                          </div>

                                    </div>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                          <div>
                                                <h5>Young Adult</h5>
                                                <p>Age 12 - 15</p>
                                          </div>
                                          <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                <button onClick={ydecrease}>-</button>
                                                <input style={{ width: '30px', textAlign: 'center' }} type="text" value={ycount} />
                                                <button onClick={yincrease}>+</button>
                                          </div>

                                    </div>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                          <div>
                                                <h5>Child</h5>
                                                <p>Age 2 - 11</p>
                                          </div>
                                          <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                <button onClick={cdecrease}>-</button>
                                                <input style={{ width: '30px', textAlign: 'center' }} type="text" value={ccount} />
                                                <button onClick={cincrease}>+</button>
                                          </div>
                                    </div>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                          <div>
                                                <h5>Infant</h5>
                                                <p>Age up to 2</p>
                                          </div>
                                          <div style={{ display: 'flex', height: '40px', width: '60px', alignItems: 'center' }}>
                                                <button onClick={idecrease}>-</button>
                                                <input style={{ width: '30px', textAlign: 'center' }} type="text" value={icount} />
                                                <button onClick={iincrease}>+</button>
                                          </div>
                                    </div>

                              </DropdownButton>

                        </div>

                        {/* <div>
                              <button>
                                    <select style={{ width: '100%', height: "40px", border: '2px solid black' }} name="subject" id="subject">
                                          <option value="" defaultValue="selected">1 passenger, Economy</option>
                                          <option value="" defaultValue="selected">1 passenger, Economy</option>
                                          <option value="" defaultValue="selected">1 passenger, Economy</option>
                                    </select>
                              </button>
                        </div> */}


                  </div>
            </>

      );
};

export default Passenger;