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
          <CardTitle className="mt-2">Photo: {props.title}</CardTitle>
          <CardSubtitle className="mb-2">{props.date}</CardSubtitle>
          <CardImg src={props.pic} alt="Card image cap" style={{width:"40%", height:"40rem"}}/>
          <CardText className="mt-4">{props.description}</CardText>        
        </CardBody>
      </Card>
    </div>
    )

}