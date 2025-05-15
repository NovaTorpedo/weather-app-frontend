import React from 'react';
import { CurrentWeather as CurrentWeatherType } from '../interfaces/WeatherTypes';
import WeatherIcon from './WeatherIcon';
import { formatTemperature, formatDate } from '../utils/WeatherUtils';

interface CurrentWeatherProps {
  weatherData: CurrentWeatherType;
  units: 'metric' | 'imperial';
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData, units }) => {
  if (!weatherData) return null;

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex flex-col items-center">
        <WeatherIcon weatherId={weatherData.weather[0].id} className="w-24 h-24 mb-2" />
        <div className="text-4xl font-bold">
          {formatTemperature(weatherData.main.temp, units)}
        </div>
        <div className="text-xl text-gray-700 capitalize">
          {weatherData.weather[0].description}
        </div>
        <div className="mt-4 text-gray-500">
          {formatDate(weatherData.dt)}
        </div>
        <div className="text-gray-500">
          {weatherData.name}, {weatherData.sys.country}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;