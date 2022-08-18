import React,{useState,useEffect} from 'react';
import Clock from './Clock/Clock';
import './App.css';
import months from './data';
import DigitalClock from './DigitalClock/DigitalClock';

const App: React.FC = ()=> {

  const [hourDigital, setHourDigital] = useState<number>(0);
  const [secondDigital, setSecondDigital] = useState<number>(0);
  const [minutesDigital, setMinutesDigital] = useState<number>(0);
  const [dayNow, setDayNow] = useState<number>(0);
  const [monthNow, setMonthNow] = useState<string>('');
  const [yearNow, setYearNow] = useState<number>(0);
  
  useEffect(() => {
    setInterval(() => {
      let date:Date = new Date();

      let HH:number = date.getHours()
      let MM:number = date.getMinutes()
      let SS:number = date.getSeconds()
      let day:number = date.getDate()
      let month:number | Array<string> = date.getMonth()
      let year:number = date.getFullYear()
        
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
        <DigitalClock
        hourDigital={hourDigital} secondDigital={secondDigital} minutesDigital={minutesDigital}
        dayNow={dayNow} monthNow={monthNow} yearNow={yearNow}
        />
      </div>

    </div>
  );
}

export default App;
