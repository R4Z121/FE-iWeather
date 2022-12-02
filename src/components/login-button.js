import React, { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { UserContext } from "../Auth";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  const onSuccess = (credentialResponse) => {
    const userData = jwt_decode(credentialResponse.credential);
    userContext.setUser({
      name: userData.name,
      id: userData.sub,
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: userData.name,
        id: userData.sub,
      })
    );
    navigate("/dashboard");
  };

  const onFailure = (res) => {
    console.log("Login Failed ! Res : ", res);
  };

  return (
    <GoogleLogin
      className="w-full p-2 flex justify-center items-center"
      onSuccess={onSuccess}
      onError={onFailure}
      auto_select
    />
  );
}
