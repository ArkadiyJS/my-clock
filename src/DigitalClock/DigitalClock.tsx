

const DigitalClock =({dayNow,monthNow,yearNow,hourDigital,minutesDigital,secondDigital}:
{
  dayNow:number,
  monthNow:string,
  yearNow:number,
  hourDigital:number,
  minutesDigital:number,
  secondDigital:number,
})=> {
  return (
    <>
    <div className='dataTime'>
        <span className='data0'>День:{dayNow} </span>
        <span className='data1'>Месец:{monthNow} </span>
        <span className='data2'>Год:{yearNow} </span>
      </div>
      <div className='time'>
        <span className='hour'>{hourDigital}ч</span>
        <span className='min'>:{minutesDigital}м</span>
        <span className='seconds'>:{secondDigital}с</span>
        </div>
      
    </>
  );
}

export default DigitalClock;