import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList.js";
import PhotoCard from './PhotoCard.js';
import axios from "axios";


export default function DateList() {
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();

    const years = ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', ];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']
    return (
        <div className="dates">
            {/* {years.map((year, index) => {
                return (
                    <DateButton
                        year={year}
                        key={index}
                        />
                );
            })} */}
        </div>
    )
}