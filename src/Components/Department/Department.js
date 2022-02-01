import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";


const Department = () => {
      return (
            <div style={{ marginLeft: '10px', minWidth: '15%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>

                        <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }}>
                              Departure
                              <input style={{ width: "100%", height: "40px", paddingLeft: '30px', backgroundColor: 'rgb(246,248,252' }} placeholder='Select dates' type="date" />
                        </label>
                  </div>
            </div >
      );
};

export default Department;