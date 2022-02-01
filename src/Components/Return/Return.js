import React from 'react';

const Return = () => {
      return (
            <div style={{ minWidth: '15%', marginLeft: '10px', }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>

                        <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }}>
                              Return
                              <input style={{ width: "100%", height: "40px", paddingLeft: '30px', backgroundColor: 'rgb(246,248,252' }} placeholder='Select departure' type="date" />
                        </label>
                  </div>
            </div >
      );
};

export default Return;