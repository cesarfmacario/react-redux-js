import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from "react-weathericons";
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from "../../../constants/weathers";

const icons = {
    [SUN]: "day-sunny",
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
}

const getWeatherIcon = (weatherState) => {
    let icon = icons[weatherState];
    if (!icon) {
        icon = icons.sun;
    }

    return (
        <WeatherIcons name={icon} size="2x" />
    )
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{ temperature }℃</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
}

export default WeatherTemperature;
