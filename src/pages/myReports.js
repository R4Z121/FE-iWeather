/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs, query, orderBy, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import AppBar from '../components/app-bar';
import AppFooter from '../components/app-footer';
import ModalForm from '../components/modal-form';
import WeatherCard from '../components/weather-card';
import { db } from "../firebase-config";

export default function MyReports() {
  const [info, setInformation] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);
  const usersCollectionRef = collection(db, "weather-report");

  //get reports from user with userID = userID in localStorage
  const { id: userId } = JSON.parse(localStorage.getItem('user'));

  const getUsers = async () => {
    const data = await getDocs(query(usersCollectionRef, where("userId", "==", `${userId}`), orderBy("reportedTime", "desc")));
    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setInformation(users);
    return users;
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addButtonClickHandler = () => {
    setIsModalShown(true);
  }

  return (
    <React.Fragment>
      <AppBar isSearchBarShown={false}></AppBar>
      <div className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 justify-center items-center z-10 ${isModalShown ? 'flex' : 'hidden'}`}>
        <ModalForm modalHandler={setIsModalShown}></ModalForm>
      </div>
      <main className='w-full p-4 flex flex-col gap-7 min-h-app-main'>
        <section className='w-full flex justify-between items-center p-1'>
          <h1 className='text-2xl font-bold '>My Reports</h1>
          <span className='p-2 bg-app-black text-white rounded-md cursor-pointer' role='button' tabIndex='0' aria-label='active form modal' onClick={addButtonClickHandler}>Add Report</span>
        </section>
        <section className='p-3 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {info.map((data, index) => <WeatherCard key={index} info={data} id={data.id} isDeleteEnabled></WeatherCard>)}
        </section>
      </main>
      <AppFooter></AppFooter>
    </React.Fragment>
  )
}
