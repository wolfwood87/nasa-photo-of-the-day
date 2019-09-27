import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList.js";
import DayButton from './DayButton.js';
import MonthButton from './MonthButton.js';
import YearButton from './YearButton.js';
import axios from "axios";

export default function PhotoCard(props) {
    return (
         <div className="photos" key={props.id}>
             <DayButton /> <MonthButton /> <YearButton />
            <h2>Photo: {props.title}</h2>
            <p>{props.date}</p>
             <span><img src={props.pic}></img></span>
             <p>{props.description}</p>
         </div>
    )

}