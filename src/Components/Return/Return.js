import React, { useEffect } from 'react';

const Return = ({ back, setBack }) => {
      const makeFieldDate = () => {
            const el = document.getElementById('returnDate');
            el.type = 'date'
      }


      useEffect(() => {
            if (back) {
                  makeFieldDate()
            }
      }, [back])
      return (
            <div style={{ minWidth: '15%', marginLeft: '10px', }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>

                        <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }}>
                              Return
                              <input id="returnDate" style={{ width: "100%", height: "40px", paddingLeft: '30px', backgroundColor: 'rgb(246,248,252' }} type="text" placeholder='Select dates' value={back} onChange={(e) => setBack(e.target.value)} onFocus={() => makeFieldDate()} />
                        </label>
                  </div>
            </div >
      );
};

export default Return;