import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard.js";
import DayButton from './DayButton.js';
import MonthButton from './MonthButton.js';
import YearButton from './YearButton.js';
import axios from "axios";

export default function PhotoList(props) {
    const [photo, setPhoto] = useState([]);
    const [nDate, setNDate] = useState(`${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`);

    const changeDate = () => {setNDate(`${YearButton.year}-0${MonthButton.month}-${DayButton.day}`); console.log(nDate);};

    useEffect(() => {

        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=4kJSozEAxx9PufXrwg8JcaJyq0lAQxrhdowkBiLj&date=${nDate}`)
            .then(result => {
                console.log(result);
                setPhoto(result.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [nDate])

    return (
        <div className='photo'>
            <PhotoCard 
                        date={photo.date}
                        title={photo.title}
                        pic={photo.url}
                        description={photo.explanation}
                        key={photo.id}
                        newDate={nDate}
                        change={changeDate}
                    />
        </div>
    );
}