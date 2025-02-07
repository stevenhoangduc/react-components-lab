
const WeatherForecast = ({forecast}) => {
  return (
    <div>
      <div className="weather">
  <h2 className="day">{forecast.day} </h2>
  <img src={forecast.img} alt={forecast.imgAlt} />
  <p><span>conditions: </span>current weather conditions</p>
  <p><span>time: </span>time of day</p>
</div>
    </div>
  );
}


export default WeatherForecast


