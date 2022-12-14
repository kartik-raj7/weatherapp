// import './App.css';
import { useState } from "react"
import React from 'react'
const keys ={
  key:"d18e8f593babe6bd791a0aec30b87eb1",
  base:"https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [call,setcall] = useState('');
  const [weather,nweather] = useState({});
  const [link,setlink] = useState('videos/Sunny.mp4')
  const search = s =>{
    if(s.key=="Enter"){
      fetch(`${keys.base}weather?q=${call}&units=metric&APPID=${keys.key}`)
      .then(res =>res.json())
      .then(result =>{
       nweather(result);
       setlink(`videos/${weather.weather[0].main}.mp4`);
       console.log(link)
      //  console.log(result);
       setcall('');
    });
  }
  }
  const dates = (e) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[e.getDay()];
    let date = e.getDate();
    let month = months[e.getMonth()];
    let year = e.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  // var link = `videos\+${weather.weather[0].main}+.mp4`
  // console.log(link);
  return (
    <div className="App">
     <main>
     {/* <video src ={link} autoPlay loop muted></video> */}
      <div className="search">
        <input type="text" className="searchbox" placeholder='Type Your City Name' onChange={s=>setcall(s.target.value)}
        value={call}
        onKeyPress={search}/>
        <video src ={link} autoPlay loop muted></video>
      </div>
      {(typeof weather.main !="undefined")?(
        <div>
      <div className ="locationbox">
        <div className="place">{weather.name},{weather.sys.country}</div>
        <div className="date">{dates(new Date())}</div>
      </div>
      <div className = "weather-b">
        <div className='temperature'>{Math.round(weather.main.temp)}° C</div>
        <div className='weather'>{weather.weather[0].main}</div>
      </div>
      </div>
      ):('')}
     </main>
    </div>
  );
}

export default App;
