import React from 'react';

const Voucher = ({ voucher, setVoucher }) => {

      return (
            <div style={{ minWidth: '25%', marginLeft: '10px' }} >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>

                        <label style={{ fontSize: '20px', textAlign: 'start', width: "100%" }}>
                              Voucher Or event Code
                              <input style={{ width: "100%", height: "40px", paddingLeft: '30px', backgroundColor: 'rgb(246,248,252' }} placeholder='Select departure' type="text" value={voucher} onChange={(e) => setVoucher(e.target.value)} />
                        </label>
                  </div>
            </div >
      );
};

export default Voucher;