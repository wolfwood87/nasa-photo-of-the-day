import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard.js";
import axios from "axios";

export default function PhotoList() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {

        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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
            {/* {photo.map(pic = {
                return (
                    <PhotoCard 
                        title={pic.title}
                        description={pic.description}
                        key={pic.id}
                    />
                );
            })} */}
        </div>
    );
}