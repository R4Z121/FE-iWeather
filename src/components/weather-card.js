/* eslint-disable no-unused-vars */
import React from "react";

export default function WeatherCard(props) {
  const info = props.info;
  return (
    <div id="card" className="flex flex-col p-3 bg-app-black text-white gap-5">
      <div className="flex gap-3">
        <img
          src={`${process.env.PUBLIC_URL}/img/${info.weather}.png`}
          alt={info.weather}
          className="w-14 h-14"
        />
        <div>
          <h1 className="flex gap-2 items-end">
            <span className="text-2xl">
              {info.temperature}<sup>o</sup>C
            </span>{" "}
            | <span className="text-sm">{info.weather.split('_').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')}</span>
          </h1>
          <p className="text-sm">{info.locationAddr}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="text-sm">Reported By: {info.username}</p>
        <p className="text-sm">At {info.reportedDate} | {info.reportedTime}</p>
      </div>
      <div className={`w-full p-2 ${props.isDeleteEnabled ? 'flex' : 'hidden'} justify-end gap-2`}>
        <span className="p-2 rounded-md bg-red-600 text-white" role='button'>Delete</span>
      </div>
    </div>
  );
}
