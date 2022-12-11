import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Geocode from "react-geocode";
import {db} from "../firebase-config";
import {collection, addDoc} from "firebase/firestore"; 
import { async } from '@firebase/util';

Geocode.setApiKey("AIzaSyBvqILfEOQhJNbBfabJSDgE1vfT-fFBvU0");
Geocode.setLanguage("id");
Geocode.setRegion("id");
Geocode.setLocationType("ROOFTOP");

export default function ModalForm(props) {
	const [username, setUsername] = useState("");
	const [userId, setUserId] = useState("");
	const [userLocation, setUserLocation] = useState({ lat: -6.176389, lng: 106.823037 });
	const [locationAddress, setLocationAddress] = useState('');
	const [latitude, setLatitude] = useState(Number);
	const [longtitude, setLongtitude] = useState(Number);
	const [weather, setWeather] = useState("");
	const [temperature, setTemperature] = useState();
	const [reportedDate, setReportedDate] = useState("");
	const [reportedTime, setReportedTime] = useState("");
	
	const usersCollectionRef = collection(db, "weather-report");

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
	Geocode.fromLatLng(userLocation.lat, userLocation.lng).then(
		(response) => {
			setLatitude(userLocation.lat)
			setLongtitude(userLocation.lng)
			const [
				{ long_name: street },
				{ long_name: route },
				{ long_name: regency }, ,
				{ long_name: state }
			] = response.results[0].address_components
			setLocationAddress(`${street}, ${route}, ${regency}, ${state}`);
		}
	);
	
	const setReported = ()=>{
		var timeStamp= Date.now();
		const dateFormat= new Date(timeStamp);
		const tanggal = dateFormat.getDate()+"-"+(dateFormat.getMonth()+1)+"-"+dateFormat.getFullYear()
		const jam = dateFormat.getHours() + ":" + dateFormat.getMinutes()+":"+dateFormat.getSeconds();
		setReportedDate(tanggal);
		setReportedTime(jam);
	}

	const createReport = async () => {
		await addDoc(usersCollectionRef, {
			username: username,
			userId: userId,
			locationAddr:locationAddress,
			latitude: latitude,
			longtitude:longtitude, 
			weather: weather,
			temperature:temperature,
			reportedDate:reportedDate,
			reportedTime:reportedTime
		})

		//console.log(username, userId, locationAddress, latitude, longtitude, temperature, weather, reportedDate, reportedTime);
	}

	useEffect(() => {
		setReported();
		getUserPosition();
		getUserData();
	}, []);

	const closeModalButtonHandler = () => {
		const setIsModalShown = props.modalHandler;
		setIsModalShown(false);
	}

	return (
		<form action="" className="flex flex-col items-center p-8 w-full max-w-md bg-app-grey-3 gap-8 fixed z-20"onSubmit={(e) => {
			e.preventDefault()}}>
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
					<input
						type="hidden"
						id="latitude"
						className="p-2 outline-none bg-app-grey-2"
						value={userLocation.lat}
						readOnly
					/>
					<input
						type="hidden"
						id="longtitude"
						className="p-2 outline-none bg-app-grey-2"
						value={userLocation.lng}
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
						value={`${locationAddress}`}
						readOnly
						onChange={(event) => 
							{setLocationAddress(event.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col w-full gap-3">
					<label htmlFor="temperature">Temperatures {'(in Celcius)'}</label>
					<input
						type="number"
						id="temperature"
						className="p-2 outline-none bg-app-grey-2"
						onChange={(event) => 
							{setTemperature(event.target.value)
						}}
					/>
				</div>
				<div className="flex flex-col w-full gap-3">
					<label htmlFor="location">Weather Situation</label>
					<select className='bg-app-grey p-3' name="condition" id="condition"
						onChange={(event)=>{
						setWeather(event.target.value)}}
					>
						<option>--Pilih Cuaca--</option>
						<option value="clear">Clear</option>
						<option value="cloudy">Cloudy</option>
						<option value="light_rain">Light Rain</option>					
						<option value="heavy_rain">Heavy Rain</option>
						<option value="storm">Storm</option>
					</select>
				</div>
				<div className="flex flex-col gap-3 w-full items-center">
					<button
						className="w-full p-3 bg-app-black text-white font-bold text-center mt-6 cursor-pointer"
						role="button"
						aria-label="Sign In"
						onClick={createReport}>
						Report Situation
					</button>
				</div>
			</div>
		</form>
	)
}
