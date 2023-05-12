import React from 'react'
// import { ImLocation2 } from 'react-icons/im'
// import { CiTempHigh } from 'react-icons/ci'
import { WiHumidity } from 'react-icons/wi'
import { GiSunrise } from 'react-icons/gi'
import { GiSunset } from 'react-icons/gi'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import { BsFillCloudsFill } from 'react-icons/bs'
import { WiWindy } from 'react-icons/wi'


const ShowWeather = ({ result }) => {
  return (
    result && Object.keys(result).length > 0 ?
      <div className='flex flex-col justify-center gap-6 py-5 bg-gradient-to-t from-[#a4a3cb] to-[#ebf1fc] text-[#444]'>
        <div className='flex flex-col items-center gap-10'>
          <h2 className='text-2xl font-semibold'>{result.name}, {result.sys.country}</h2>

          <div className='flex flex-col items-center gap-5'>
            <div className='flex flex-row gap-10'>
              {/* <p className='align-sub'>min: {Math.floor(result.main.temp_min)}</p> */}
              <img src={`http://openweathermap.org/img/w/${result.weather[0].icon}.png`} width={80} alt="" />
              <h3 className='flex flex-row'><p className='text-6xl font-bold'>{Math.round(result.main.temp)}</p> <p className='align-super text-lg font-semibold'>°C</p></h3>
              {/* <p className='align-sub'>max: {Math.ceil(result.main.temp_max)}</p> */}
            </div>
            <p className='flex flex-row gap-1 font-semibold text-xl '><TiWeatherWindyCloudy />{result.weather[0].main}</p>
          </div>
        </div>


        <div className='flex flex-col gap-5 px-5'>
          <p className='flex flex-row gap-5 justify-between font-semibold text-xl'><span className='flex flex-row gap-5'><WiHumidity size={30} />Humidity</span>{result.main.humidity}%</p>
          {/* <p className='flex flex-row gap-5 justify-between font-semibold text-xl'><span className='flex flex-row gap-5'><BsFillCloudsFill />Atmospheric Pressure</span>{result.main.pressure}</p> */}
          <p className='flex flex-row gap-5 justify-between font-semibold text-xl'><span className='flex flex-row gap-5'><WiWindy size={30} />Wind Speed</span>{result.wind.speed} km/h</p>
          <p className='flex flex-row gap-5 justify-between font-semibold text-xl'><span className='flex flex-row gap-5'><BsFillCloudsFill size={30} />Colud Cover</span>{result.clouds.all}%</p>
          <p className='flex flex-row gap-5 justify-between font-semibold text-xl'><span className='flex flex-row gap-5'><GiSunrise size={30} />Sunrise</span>{new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p className='flex flex-row gap-5 justify-between font-semibold text-xl'><span className='flex flex-row gap-5'><GiSunset size={30} />Sunset</span>{new Date(result.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      </div >
      :
      <div className='flex justify-center my-[25%]'>
        <p className='bg-orange-200 p-2 text-sm'>Write City and Country name to find Weather report</p>
      </div>
  )
}

export default ShowWeather