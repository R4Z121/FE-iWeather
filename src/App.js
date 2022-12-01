import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import UserReport from './pages/userReport';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/MyReports' element={<UserReport></UserReport>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
