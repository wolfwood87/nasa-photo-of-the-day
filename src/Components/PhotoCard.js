import React, { useState, useEffect } from "react";
import PhotoList from "./PhotoList.js";
import axios from "axios";

export default function PhotoCard(props) {
    return (
         <div className="photos" key={props.id}>
            <h2>Photo: {props.title}</h2>
                <p>{props.date}</p>
             <span><img src={props.pic}></img></span>
             <p>{props.description}</p>
         </div>
    )

}