import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList.js";
import PhotoCard from './PhotoCard.js';
import axios from "axios";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class MonthButton extends React.Component {
  constructor(props) {
    super(props);

    MonthButton.month = new Date().getMonth() + 1;
    
    this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.monthName = this.months[new Date().getMonth()];
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    
  }

  

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  

  render() {
    return (
      <span>
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.monthName}
        </DropdownToggle>
        <DropdownMenu>
            {this.months.map((name, index) => {
                return <DropdownItem key = {index} onClick={()=>{MonthButton.month=index + 1; this.monthName=name}}>{name}</DropdownItem>
            })}
        </DropdownMenu>
      </ButtonDropdown>
      </span>
    )
    
}
}