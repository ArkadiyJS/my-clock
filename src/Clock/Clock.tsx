import React, { useState } from "react";
import "./Clock.css";


function Clock() {
  const [hour, setHour]= useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  

  const clock = () => {
    let date = new Date();

    let hh:number = date.getHours() * 30,
      mm:number = date.getMinutes() * 6,
      ss:number = date.getSeconds() * 6;

    setHour(hh + mm / 12);
    setMinutes(mm);
    setSeconds(ss);
  };
  setInterval(clock, 1000);

  return (
    <div className="clock__circle">
      
      <span className="clock__twelve"></span>
      <span className="clock__three"></span>
      <span className="clock__six"></span>
      <span className="clock__nine"></span>

      <div className="clock__rounder"></div>
      <div className="clock__hour" style={{ transform:`rotateZ(${hour}deg)`  }}></div>
      <div className="clock__minutes" style={{ transform: `rotateZ(${minutes}deg)` }}></div>
      <div className="clock__seconds" style={{ transform: `rotateZ(${seconds}deg)` }}></div>
    </div>
  );
}

export default Clock;
