var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's it {temp}&deg; Celsius in {location}.</h3>
  )
};

module.exports = WeatherMessage;
