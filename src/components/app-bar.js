import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { googleLogout } from '@react-oauth/google';
import { UserContext } from '../Auth';

export default function AppBar(props) {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const burgerClick = () => {
    setIsNavbarActive(!isNavbarActive);
  }
  const burgerKeyboardEvent = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      burgerClick();
    }
  }

  const [enterSearch, setEnterSearch] = useState("");

  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('user');
    userContext.user = null;
    googleLogout();
    navigate("/");
  }

  // const searchKeyDownHandler = () => {

  // }

  return (
    <header className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap w-full'>
      <section className='w-full sm:w-fit flex justify-between p-5 lg:order-1'>
        <div id='brand'>
          <h1 className='text-2xl font-bold'>IWEATHER</h1>
        </div>
        <div id='burger' className='w-14 flex flex-col p-1 gap-1 sm:hidden' role='button' aria-label='navigation-toggler' tabIndex='0' onClick={burgerClick} onKeyDown={burgerKeyboardEvent}>
          <span id='burger-item' className='p-3/4 bg-app-black rounded-md'></span>
          <span id='burger-item' className='p-3/4 bg-app-black rounded-md'></span>
          <span id='burger-item' className='p-3/4 bg-app-black rounded-md'></span>
        </div>
      </section>
      <section className={`w-full ${isNavbarActive ? 'h-13' : 'h-0'} overflow-hidden transition-height duration-150 sm:h-auto sm:w-fit lg:order-3`}>
        <nav className='w-full sm:w-fit flex flex-col p-2 pb-4 sm:p-3 sm:flex-row'>
          <Link to='./' className={`w-fit p-5 ${isNavbarActive ? 'visible' : 'invisible'} sm:visible`}>Dashboard</Link>
          <Link to='./MyReports' className={`w-fit p-5 ${isNavbarActive ? 'visible' : 'invisible'} sm:visible`}>My Reports</Link>
          <span className={`w-fit p-5 ${isNavbarActive ? 'visible' : 'invisible'} sm:visible`} role='button' aria-label='Log Out' onClick={logOut}>Log Out</span>
        </nav>
      </section>
      <section className='w-full md:max-w-xl lg:order-2 lg:w-30 p-5'>
        <form className='bg-app-grey-2 rounded-sm overflow-hidden flex w-full' onSubmit={(e) => {
          e.preventDefault()
          if (enterSearch.trim().length <= 0) {
            return
          }
          props.searchHandler(enterSearch.trim())
        }}>
          <div className='p-2 bg-app-black' id='search-btn' role='button' aria-label='find-location' tabIndex='0' onClick={() => {
            if (enterSearch.trim().length <= 0) {
              return
            }
            props.searchHandler(enterSearch.trim())
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox='0 0 50 50' fill='#FFFFFF'><path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" /></svg>
          </div>
          <input className='outline-none bg-transparent text-base w-full pl-2 pr-2' type='text' placeholder='Cari Lokasi' value={enterSearch} onChange={e => { setEnterSearch(e.target.value) }} />
        </form>
      </section>
    </header>
  )
}
