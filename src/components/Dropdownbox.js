import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { memo } from "react";

import "./style/Dropdownbox.scss";

function Dropdownbox({ options }) {
    const NameMenu = options[0];
    const optionList = options.map((option, index) => {
      
      return (
      <React.Fragment key={index}>
            <Dropdown.Item href="">{option}</Dropdown.Item>
      </React.Fragment>  
      )
    });
    console.log(optionList)
    return ( 
        <Dropdown className="dropStyle">
            <Dropdown.Toggle variant="" id="dropdown-basic">
                 {NameMenu}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {optionList}
            </Dropdown.Menu>
        </Dropdown>
    );
  }
export default memo(Dropdownbox);