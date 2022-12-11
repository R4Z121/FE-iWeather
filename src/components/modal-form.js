import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function ModalForm(props) {
	const [username, setUsername] = useState("");
	const [userId, setUserId] = useState("");
	const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });

	const getUserPosition = () => {
		navigator.geolocation.getCurrentPosition(position => {
			setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
		});
	}
	const getUserData = () => {
		const userData = JSON.parse(localStorage.getItem("user"));
		setUsername(userData.name);
		setUserId(userData.id)
	}

	useEffect(() => {
		getUserPosition();
		getUserData();
	}, []);

	const closeModalButtonHandler = () => {
		const setIsModalShown = props.modalHandler;
		setIsModalShown(false);
	}

	return (
		<form action="" className="flex flex-col items-center p-8 w-full max-w-md bg-app-grey-3 gap-8 fixed z-20">
			<div className='w-full p-1 flex justify-end absolute top-3 right-4'>
				<p className='text-xl text-red-500 font-bold cursor-pointer' onClick={closeModalButtonHandler}>x</p>
			</div>
			<div className="flex flex-col w-full gap-5">
				<div className="flex flex-col w-full gap-3">
					<input
						type="hidden"
						id="userId"
						className="p-2 outline-none bg-app-grey-2"
						value={userId}
						readOnly
					/>
				</div>
				<div className="flex flex-col w-full gap-3">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						className="p-2 outline-none bg-app-grey-2"
						value={username}
						readOnly
					/>
				</div>
				<div className="flex flex-col w-full gap-3">
					<label htmlFor="location">Location</label>
					<input
						type="text"
						id="location"
						className="p-2 outline-none bg-app-grey-2"
						value={`${userLocation.lat}, ${userLocation.lng}`}
						readOnly
					/>
				</div>
				<div className="flex flex-col w-full gap-3">
					<label htmlFor="temperature">Temperatures {'(in Celcius)'}</label>
					<input
						type="number"
						id="temperature"
						className="p-2 outline-none bg-app-grey-2"
					/>
				</div>
				<div className="flex flex-col w-full gap-3">
					<label htmlFor="location">Weather Situation</label>
					<select className='bg-app-grey p-3' name="condition" id="condition">
						<option value="clear">Clear</option>
						<option value="cloudy">Cloudy</option>
						<option value="lightRain">Light Rain</option>
						<option value="heavyRain">Heavy Rain</option>
						<option value="Storm">Storm</option>
					</select>
				</div>
				<div className="flex flex-col gap-3 w-full items-center">
					<div
						className="w-full p-3 bg-app-black text-white font-bold text-center mt-6 cursor-pointer"
						role="button"
						aria-label="Sign In"
					>
						Report Situation
					</div>
				</div>
			</div>
		</form>
	)
}
