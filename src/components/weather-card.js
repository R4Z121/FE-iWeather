/* eslint-disable no-unused-vars */
import React from 'react'

export default function WeatherCard() {
  return (
    <div id='card' className='flex flex-col p-3 bg-app-black text-white gap-3'>
        <div className='flex gap-3'>
            <img src='%PUBLIC_URL%/img/heavy-rain.png' alt="heavy-rain" className='w-14 h-14' />
            <div>
                <h1 className='flex gap-2 items-end'><span className='text-2xl'>16<sup>o</sup>C</span> | <span className='text-sm'>Heavy Rain</span></h1>
                <p className='text-sm'>Address Here</p>
            </div>
        </div>
        <div>
            <p className='text-sm'>Reported By: Unknown User</p>
        </div>
    </div>
  )
}
