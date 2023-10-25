import './App.css'

function App() {

  return (
   <>
   <div className="app">
  <div className="search">
    <input placeholder='Enter Location' type='text'/>
  
  </div>
  <div className="container">
    <div className="top">
      <div className="location">
        <p>Amman</p>
      </div>
      <div className="temp">
        <h1>30℃</h1>
      </div>
      <div className="description">
        <p>Clear</p>
      </div>
    </div>
      <div className="bottom">
        <div className="feels">
          <p>30℃</p>
          <p>Feeks Like</p>
        </div>
        <div className="humidity">
          <p>20%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <p className="bold">2KPH</p>
          <p>Wind Speed</p>
        </div>

    </div>
  </div>
   </div>
   </>
  );
      }
export default App
