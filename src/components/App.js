
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Weather from "./weather";
import axios from "axios";
import 'regenerator-runtime/runtime';

// const API_KEY = '05af5ba8a19b4cba8bc103741243007';

const App = () => {
  //const = baseApi;
  const [input, setInput] = useState('');
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState('null');

  const handleInput = (e) =>{
    // console.log(e.target.value);
    setInput(e.target.value);
  }

  const submit = (e) =>{
    e.preventDefault();
    // console.log(input);
    setLocation(input);
    // getApi();
    
  }

  const getApi = async() =>{
    try{
    const response = await axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?unitGroup=metric&key=7AJ26CBGNE8WAPGKM8Q9EV77G&contentType=json`);
    setWeatherData({
      temperature: response.data.currentConditions.temp,
      conditions: response.data.currentConditions.conditions
    })
    console.log(response);
    console.log(response.data.currentConditions.temp);
    console.log(response.data.currentConditions.conditions);
  }
   catch(error){
    console.error(error);
   }
  };
  

  useEffect(()=>{
    getApi();
  },[location]);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Weather App</h1>
        <form onSubmit={submit}>
          <input type="text" value = {input} placeholder="enter the location" onChange={handleInput}></input>
          <button type="submit">Enter</button>
        </form>
        <Weather temp={weatherData.temperature} cond={weatherData.conditions}/>
    </div>
  )
}

export default App;
