import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard.js";
import axios from "axios";

export default function PhotoList() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {

        axios
            .get('')
    })
}