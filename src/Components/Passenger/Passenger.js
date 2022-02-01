import React from 'react';
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
const Passenger = () => {
      return (
            <>
                  <div style={{ border: '1px solid green', width: '25%', marginLeft: '50px' }}>
                        <label>
                              <input style={{ marginRight: '50px', width: '200%' }} list="browsers" name="myBrowser" /></label>
                        <datalist id="browsers" >
                              <option value="Chrome" />
                              <option value="Firefox" />
                              <option value="Internet Explorer" />
                              <option value="Opera" />
                              <option value="Safari" />
                              <option value="Microsoft Edge" />
                        </datalist>
                  </div>
            </>

      );
};

export default Passenger;