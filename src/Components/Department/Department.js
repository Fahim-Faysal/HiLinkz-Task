import React, { useEffect } from 'react';


const Department = ({ date, setDate }) => {

      const makeFieldDate = () => {
            const el = document.getElementById('departure');
            el.type = 'date'

      }

      useEffect(() => {
            if (date) {
                  makeFieldDate()
            }
      }, [date])


      return (
            <div style={{ marginLeft: '10px', minWidth: '15%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>

                        <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }}>
                              Departure
                              <input id="departure" style={{ width: "100%", height: "40px", paddingLeft: '30px', backgroundColor: 'rgb(246,248,252' }} type="text" value={date} placeholder='Select dates' onChange={(e) => setDate(e.target.value)} onFocus={() => makeFieldDate()} />
                        </label>
                  </div>
            </div >
      );
};

export default Department;