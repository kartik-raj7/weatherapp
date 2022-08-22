// import './App.css';
import React from 'react'
const keys ={
  key:"d18e8f593babe6bd791a0aec30b87eb1",
  base:"http://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="App">
     <main>
      <div className="search">
        <input type="text" className="searchbox" placeholder='Type Your City Name'/>
      </div>
      <div className ="locationbox">
        <div className="place"></div>
        <div className="date"></div>
      </div>
     </main>
    </div>
  );
}

export default App;
