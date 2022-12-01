import React, { useEffect } from 'react'
import { gapi } from 'gapi-script';
import LoginButton from '../components/login-button';

const clientId = '177791728822-ev3lsu6blnaj5c8nmh16ldcm957rdofv.apps.googleusercontent.com';

export default function Login() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: { clientId },
        scope: ''
      });
    }
    gapi.load('client:auth2',start);
 });

  return (
    <React.Fragment>
      <main className='min-h-screen w-full flex justify-center items-center p-4'>
        <form action="" className='flex flex-col items-center p-8 w-full max-w-md bg-app-grey-3 gap-8'>
          <div className="logo bg-app-lime flex items-stretch w-fit">
            <div className='p-2 bg-app-black'></div>
            <h1 className='p-2 font-bold text-app-black'>iWeather</h1>
          </div>
          <div className='flex flex-col w-full gap-5'>
            <div className='flex flex-col w-full gap-3'>
              <label htmlFor='email'>Email</label>
              <input type="email" id='email' className='p-2 outline-none bg-app-grey-2' required />
            </div>
            <div className='flex flex-col w-full gap-3'>
              <label htmlFor='password'>password</label>
              <input type="password" id='password' className='p-2 outline-none bg-app-grey-2' required />
            </div>
          </div>
          <div className='flex flex-col gap-3 w-full max-w-xs items-center'>
            <div className='w-full p-3 bg-app-black text-white font-bold text-center mt-6' role='button' aria-label='Sign In'>
              Sign In
            </div>
            <p>Or</p>
            <LoginButton></LoginButton>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
}
