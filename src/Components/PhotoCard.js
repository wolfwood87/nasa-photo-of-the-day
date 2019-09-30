import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList.js";
import DayButton from './DayButton.js';
import MonthButton from './MonthButton.js';
import YearButton from './YearButton.js';
import axios from "axios";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function PhotoCard(props) {
    
    

    
    return (
    <div key={props.id}>
      <Card>    
        <CardBody>
        <DayButton /> <MonthButton /> <YearButton /> <span />
        <Button onClick={props.change}>Go</Button>
          <CardTitle>Photo: {props.title}</CardTitle>
          <CardSubtitle>{props.date}</CardSubtitle>
          <CardImg top width="100%" src={props.pic} alt="Card image cap" />
          <CardText>{props.description}</CardText>        
        </CardBody>
      </Card>
    </div>
    )

}