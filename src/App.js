import "./App.css";
import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import MyReports from "./pages/myReports";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserContext } from "./Auth";

const clientId =
  "177791728822-ev3lsu6blnaj5c8nmh16ldcm957rdofv.apps.googleusercontent.com";

function App() {
  const userContext = useContext(UserContext);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      userContext.setUser(JSON.parse(userData));
    }
  }, []);
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Login></Login>} />
          <Route exact path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route exact path="/myReports" element={<MyReports></MyReports>} />
        </Routes>
      </React.Fragment>
    </GoogleOAuthProvider>
  );
}

export default App;
