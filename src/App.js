import React,{useState,useEffect} from 'react';
import Clock from './Clock/Clock';
import './App.css';
import months from './data';

function App() {
  const [hourDigital, setHourDigital] = useState("");
  const [secondDigital, setSecondDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  
  useEffect(() => {
    setInterval(() => {
      let date = new Date();

      let HH = date.getHours()
      let MM = date.getMinutes()
      let SS = date.getSeconds()
      let day = date.getDate()
      let month = date.getMonth()
      let year = date.getFullYear()
        
      setSecondDigital(SS);
      setHourDigital(HH);
      setMinutesDigital(MM);
      setDayNow(day);
      setMonthNow(months[month]);
      setYearNow(year);
    }, 1000);
  }, []);









  return (
    <div className="App">
      
      <div className='Clock'>
        <Clock/>
      </div>

      <div className='digitalClock'>
        
      <div className='dataTime'>
        <span className='data0'>День:{dayNow} </span>
        <span className='data1'>Месец:{monthNow} </span>
        <span className='data2'>Год:{yearNow} </span>
      </div>
      <div className='time'>
        <span className='hour'>{hourDigital}</span>
        <span className='min'>:{minutesDigital}</span>
        <span className='seconds'>:{secondDigital}</span>
        </div>
        
      
      </div>
    </div>
  );
}

export default App;
