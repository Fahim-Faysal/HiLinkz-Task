import React from 'react';

const Radio = ({ radio, setRadio }) => {

      return (
            <div style={{ display: 'flex', textAlign: 'start', marginBottom: '20px' }}>
                  <div style={{ marginLeft: '10px', fontSize: '20px' }}>

                        <input type="radio" name="One way" value="One way"
                              checked={radio === "One way"}
                              onChange={(e) => setRadio(e.target.value)} />
                        <label htmlFor="huey">One Way</label>
                  </div>

                  <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                        <input type="radio" name='Round Trip' value="Round Trip" checked={radio === "Round Trip"} onChange={(e) => setRadio(e.target.value)}
                        />
                        <label htmlFor="dewey">Round Trip</label>
                  </div>
            </div>
      );
};

export default Radio;