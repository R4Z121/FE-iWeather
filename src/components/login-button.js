import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId = '177791728822-ev3lsu6blnaj5c8nmh16ldcm957rdofv.apps.googleusercontent.com';

export default function LoginButton() {

  const onSuccess = res => {
    console.log("Login Success ! Current User : ",res.profileObj);
  }

  const onFailure = res => {
    console.log("Login Failed ! Res : " + res);
  }

  return (
    <GoogleLogin
        className='w-full p-2 flex justify-center items-center'
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
    />
  )
}
