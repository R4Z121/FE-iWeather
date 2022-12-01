import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './search-bar'

export default function AppBar() {
  const [isNavbarActive,setIsNavbarActive] = useState(false);
  const burgerClick = () => {
    setIsNavbarActive(!isNavbarActive);
  }
  const burgerKeyboardEvent = (e) => {
    if (e.keyCode === 32 || e.keyCode === 13) {
      burgerClick();
    }
  }
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
          <Link to='./Log Out' className={`w-fit p-5 ${isNavbarActive ? 'visible' : 'invisible'} sm:visible`}>Log Out</Link>
        </nav>
      </section>
      <section className='w-full md:max-w-xl lg:order-2 lg:w-30 p-5'>
        <SearchBar></SearchBar>
      </section>
    </header>
  )
}
