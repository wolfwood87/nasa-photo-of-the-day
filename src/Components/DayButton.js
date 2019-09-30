import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList.js";
import PhotoCard from './PhotoCard.js';
import axios from "axios";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DayButton extends React.Component  {
  constructor(props) {
    super(props);

    this.days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    
    DayButton.day = new Date().getDate();
    
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
          {DayButton.day}
        </DropdownToggle>
        <DropdownMenu>
          {this.days.map((num, index) => {
            return <DropdownItem key = {index} onClick={()=>{DayButton.day=num}}>{num}</DropdownItem>
          })}
        </DropdownMenu>
      </ButtonDropdown>
      </span>
    )
}
}