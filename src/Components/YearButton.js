import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList.js";
import PhotoCard from './PhotoCard.js';
import axios from "axios";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class YearButton extends React.Component {
  constructor(props) {
    super(props);

    this.years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010];
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
    
    YearButton.year = new Date().getFullYear();
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
          {YearButton.year}
        </DropdownToggle>
        <DropdownMenu>
        {this.years.map((num, index) => {
                return <DropdownItem key = {index} onClick={()=>{YearButton.year=num}}>{num}</DropdownItem>
            })}
        </DropdownMenu>
      </ButtonDropdown>
      </span>
      
    )
}
}