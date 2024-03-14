import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Weather({ lat, lng }) {
    const [temp, setTemp] = useState(0);
    // const [speed, setSpeed]  = useState(0);
    // const [direction, setDirection]  = useState(0);
    // const [description, setDescription]  = useState(0);
    // const [icon, setIcon]  = useState(0);

    // joskus on fiksu tehdä yksi tilamuuttuja joka ottaa ylös kaksi arvoa
    // const [position, setPosition] = useState({ "position.coords.latitude": 0, "position.coords.longitude": 0 });
    const [position, setPosition] = useState(null);
    //kun sivu avataan haetaan sijaintia
    //async koodia useeffectin sisään jos hidasta

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setPosition(position);
                const address =
                    process.env.REACT_APP_URL +
                    "lat=" +
                    position.coords.latitude +
                    "&lon=" +
                    position.coords.longitude +
                    "units=metric" +
                "&appid=" + process.env.REACT_APP_API_KEY
              console.log(address);
              console.log(process.env)
              axios.get(address)
                .then(response => {

                }).catch(error => {
                  console.log(error)
                  alert(error)
                 })

            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <div>
            <h3>Weather in your current location</h3>
            {/* jos positio on jotain */}
            {position && (
                <p>
                    Your latitude and longitude is{" "}
                    {position.coords.latitude.toFixed(3)},{" "}
                    {position.coords.longitude.toFixed(3)}{" "}
                </p>
            )}
            <p>
                Temp is <span>{temp}</span>
            </p>
        </div>
    );
}
