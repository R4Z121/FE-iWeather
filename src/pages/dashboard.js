import React, { useContext, useEffect, useState } from "react";
import AppBar from "../components/app-bar";
import WeatherInfo from "../components/weather-info";
import AppMap from "../components/app-map";
import WeatherCard from "../components/weather-card";
import AppFooter from "../components/app-footer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Auth";
import Geocode from "react-geocode";
import {db} from "../firebase-config";
import {collection, getDocs} from "firebase/firestore"; 

Geocode.setApiKey("AIzaSyBvqILfEOQhJNbBfabJSDgE1vfT-fFBvU0");
Geocode.setLanguage("id");
Geocode.setRegion("id");
Geocode.setLocationType("ROOFTOP");

export default function Dashboard() {
  
  //start here
  const [users, setUsers] = useState([]);
  const [info, setInformation] = useState([]);
  const usersCollectionRef = collection(db, "weather-report");
 
  // const info = {
  //   reportedUser: 'pudidi',
  //   address: 'palembang',
  //   weather: 'heavy_rain',
  //   temperatures: '16',
  //   reportedDate: '2022-12-6',
  //   reportedTime: '10:10:10'
  // }
  
  useEffect(()=>{
    
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setInformation(data.docs.map((doc)=> ({...doc.data(), id:doc.id })));
    }

    getUsers();
  }, []);

  {info.forEach(data => {
    <WeatherCard> info={data} </WeatherCard>
  })}
  //done here

  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userContext.user) {
      navigate("/");
    }
  }, [userContext.user, navigate]);

  const [center, setCenterMap] = useState({ lat: -6.176389, lng: 106.823037 });
  const getUserPosition = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setCenterMap({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
  }
  useEffect(() => {
    getUserPosition();
  }, []);

  const searchLocation = address => {
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCenterMap({ lat: lat, lng: lng });
      },
      (error) => {
        alert('Lokasi tidak ditemukan');
        getUserPosition();
      }
    );
  }

  return (
    <React.Fragment>
      <AppBar searchHandler={searchLocation} isSearchBarShown></AppBar>
      <main className="w-full grid grid-cols-1 p-3 pb-8 gap-8 md:grid md:grid-cols-2 lg:p-8">
        <section className="w-full flex flex-col gap-5">
          <WeatherInfo geocode={Geocode} lat={center.lat} lng={center.lng}></WeatherInfo>
          <AppMap lat={center.lat} lng={center.lng} isMarkerShown></AppMap>
        </section>
        <section className="w-full bg-app-grey">
          <div className="section-header w-full flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold">Latest Report</h1>
          </div>
          <div className="section-body w-full bg-app-lime p-5 flex flex-col gap-3">
            <WeatherCard info={info}></WeatherCard>
            <WeatherCard info={info}></WeatherCard>
            <WeatherCard info={info}></WeatherCard>
            <WeatherCard info={info}></WeatherCard>
            <WeatherCard info={info}></WeatherCard>
          </div>
        </section>
      </main>
      <AppFooter></AppFooter>
    </React.Fragment>
  );
}
