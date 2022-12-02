/* eslint-disable no-unused-vars */
import React from "react";

export default function WeatherInfo() {
  return (
    <div
      id="card"
      className="flex justify-between rounded-md p-3 sm:p-5 bg-app-black text-white gap-3"
    >
      <h1 className="text-base sm:text-xl font-bold">Address, Location</h1>
      <div className="flex gap-1">
        <img
          src={`${process.env.PUBLIC_URL}/img/clear.png`}
          alt="clear-weather"
          className="w-9 h-9 sm:w-14 sm:h-14"
        />
        <div>
          <h2 className="text-lg font-bold sm:text-2xl">
            35<sup>o</sup>C
          </h2>
          <p className="text-xs sm:text-base font-semibold">Sunny</p>
        </div>
      </div>
    </div>
  );
}
