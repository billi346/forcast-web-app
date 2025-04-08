import React from "react";
import wind from "../assets/wind.svg";
const HourlyList = ({ filteredHours }) => {
  const hourElem = filteredHours?.map((el) => {
    const time = el.time.split(" ")[1];

    const classNameBg = time >= "20:00" ? "hourly-night" : "hourly-day";

    return (
      <li className={`${classNameBg} hourly__item`}>
        <p>{time}</p>
        <img width={80} src={el.condition?.icon} alt="weather" />
        <p>{el.temp_c}°C</p>
        <img width={40} src={wind} alt="weather" />
        <p>{el.wind_kph}km/h</p>
      </li>
    );
  });
  return <ul className="hourly__list">{hourElem}</ul>;
};

export default HourlyList;
