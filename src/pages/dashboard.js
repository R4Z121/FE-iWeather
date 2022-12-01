import React from 'react'
import AppBar from '../components/app-bar'
import WeatherInfo from '../components/weather-info'
import AppMap from '../components/app-map'
import WeatherCard from '../components/weather-card'
import AppFooter from '../components/app-footer'
export default function Dashboard() {
  return (
    <React.Fragment>
      <AppBar></AppBar>
      <main className='w-full flex flex-col p-3 pb-8 gap-8 md:grid md:grid-cols-2 lg:p-8'>
          <section className='w-full flex flex-col gap-5'>
            <WeatherInfo></WeatherInfo>
            <AppMap></AppMap>
          </section>
          <section className='w-full bg-app-grey'>
            <div className='section-header w-full flex flex-col items-center p-4'>
              <h1 className='text-2xl font-bold'>Latest Report</h1>
            </div>
            <div className='section-body w-full bg-app-lime p-5 flex flex-col gap-3'>
              <WeatherCard></WeatherCard>
              <WeatherCard></WeatherCard>
              <WeatherCard></WeatherCard>
              <WeatherCard></WeatherCard>
              <WeatherCard></WeatherCard>
            </div>
          </section>
      </main>
      <AppFooter></AppFooter>
    </React.Fragment>
  )
}
