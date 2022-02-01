import React from 'react';

const Passenger = () => {
      return (
            <>
                  <div style={{ minWidth: '25%', marginLeft: '10px' }}>
                        <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }} >Passengers/travel class</label>
                        <select style={{ width: '100%', height: "40px" }} name="subject" id="subject">
                              <option value="" selected="selected">1 passenger, Economy</option>
                        </select>
                  </div>
            </>

      );
};

export default Passenger;