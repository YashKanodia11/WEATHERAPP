import React, { useEffect } from 'react'

const Weathercard = ({tempInfo}) => {
  const [weatherstate, setWeathestate]= React.useState("");
   const {
     temp,
     humidity,
     pressure,
     weathermood,
     name,
     speed,
     country,
     sunset,
   } = tempInfo;

   useEffect(()=>{
      if (weathermood) {
        switch (weathermood) {
          case "Clouds":
            setWeathestate("wi-day-cloudy");
            break;
          case "Haze":
            setWeathestate("wi-fog");
            break;
          case "Clear":
            setWeathestate("wi-day-sunny");
            break;
          case "Mist":
            setWeathestate("wi-day-dust");
            break;
          case "Rain":
            setWeathestate("wi-day-rain");
            break;

          default:
            setWeathestate("wi-day-sunny");
            break;
        }
      }
   },)
   //converting sec to time
   let sec=sunset;
   let date= new Date(sec*1000);
   let timestr=`${date.getHours()}:${date.getMinutes()}`
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherstate}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="palce">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timestr}pm <br />
                sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard
