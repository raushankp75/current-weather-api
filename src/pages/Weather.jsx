import React, { useState } from 'react'
import InputForm from '../components/InputForm'
import ShowWeather from '../components/ShowWeather'

const Weather = () => {

    const [result, setResult] = useState({});

    return (
        <div className='flex justify-center'>
            <div className='md:w-[45%] w-[97%] md:h-[92vh] h-[98vh] md:my-[2%] my-[1%] shadow-2xl rounded-2xl border'>
                <InputForm setResult={setResult} />
                <ShowWeather result={result} />
            </div>
        </div>
    )
}

export default Weather