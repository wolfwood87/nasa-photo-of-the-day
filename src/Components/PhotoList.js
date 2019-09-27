import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard.js";
import axios from "axios";

export default function PhotoList() {
    const [photo, setPhoto] = useState([]);
    
    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=4kJSozEAxx9PufXrwg8JcaJyq0lAQxrhdowkBiLj&date=2019-09-24')
            .then(result => {
                console.log(result);
                setPhoto(result.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className='photo'>
            <PhotoCard 
                        date={photo.date}
                        title={photo.title}
                        pic={photo.url}
                        description={photo.explanation}
                        key={photo.id}
                    />
        </div>
    );
}