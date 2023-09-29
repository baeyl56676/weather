import React from 'react'
import axios from 'axios'
import { useState,useEffect} from 'react'

const Home = ({city}) => {
  const[weather,setWeather] = useState ({})
  useEffect(() =>{
  axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5deb6268a7ba84dc280092cf814ff89c`)
  .then(({data}) => {
    setWeather(data);
})
},[city]);

  return (
    <main className='main'>
      <h2 className='main__title'>{city}</h2>
      <div className='main__content'>
        <p className='main__temp'>{Math.round(weather?.main?.temp -273.5)}°C</p>
        <p className='main__clouds'>{weather.weather && weather?.weather[0].description}</p>
        <p className='main__day'>{weather?.main?.temp_min}</p>
        <p className='main__hight'>{weather?.main?.temp_max}</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`} alt='weather'/>
      </div>
    </main>
  )
}

export default Home