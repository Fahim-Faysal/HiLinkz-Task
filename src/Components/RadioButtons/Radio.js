import React from 'react';

const Radio = () => {
      return (
            <div style={{ display: 'flex', textAlign: 'start', marginBottom: '20px' }}>
                  <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                        <input type="radio" id="huey" name="drone" value="huey"
                              checked />
                        <label for="huey">One Way</label>
                  </div>

                  <div style={{ marginLeft: '10px', fontSize: '20px' }}>
                        <input type="radio" id="dewey" name="drone" value="dewey" />
                        <label for="dewey">Round Trip</label>
                  </div>
            </div>
      );
};

export default Radio;