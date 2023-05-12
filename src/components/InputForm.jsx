import React, { useState } from 'react'

import { getWeather } from '../services/api'



const InputForm = ({ setResult }) => {

  const [data, setData] = useState({ city: '', country: '' })

  const handleChange = (e) => {
    // console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  const getWeatherDetails = async () => {
    let response = await getWeather(data.city, data.country)
    setResult(response);
  }

  return (
    <div className='flex flex-col gap-3 p-4 bg-blue-950 rounded-tr-2xl rounded-tl-2xl'>
      <h1 className='text-white font-extrabold text-xl tracking-widest text-center'>Live Weather Finder</h1>

      <div className='flex md:flex-row flex-col justify-between gap-6'>
        <div className='flex flex-row gap-5'>
          <input onChange={(e) => handleChange(e)} name='city' type="text" placeholder='City' className='w-[48%] md:px-3 px-2 md:py-2 py-1 rounded-lg outline-none border-2 border-slate-400 hover:border-green-400 focus:border-green-400 active:border-green-400' />
          <input onChange={(e) => handleChange(e)} name='country' type="text" placeholder='Country' className='w-[48%] md:px-3 px-2 md:py-2 py-1 rounded-lg outline-none border-2 border-slate-400 hover:border-green-400 focus:border-green-400 active:border-green-400' />
        </div>

        <button onClick={() => getWeatherDetails()} className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... px-3 py-2 rounded-lg tracking-widest font-semibold text-white'>Get Weather</button>
      </div>
    </div>
  )
}

export default InputForm