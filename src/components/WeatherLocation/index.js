import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

const WeatherLocation = () => (
    <div>
        <Location city={"Ciudad de Guatemala"} />
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;
