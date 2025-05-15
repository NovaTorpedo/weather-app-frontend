import React from 'react';
import { CurrentWeather } from '../interfaces/WeatherTypes';
import { formatWindSpeed } from '../utils/WeatherUtils';

interface WeatherDetailsProps {
  weatherData: CurrentWeather;
  units: 'metric' | 'imperial';
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData, units }) => {
  if (!weatherData) return null;

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 mb-2">Wind Status</h3>
        <div className="flex items-center">
          <div className="text-2xl font-bold mr-2">
            {formatWindSpeed(weatherData.wind.speed, units)}
          </div>
          <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
        </div>
        <div className="mt-2 text-gray-500 text-sm">
          Direction: {weatherData.wind.deg}°
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 mb-2">Humidity</h3>
        <div className="text-2xl font-bold mb-2">
          {weatherData.main.humidity}%
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full" 
            style={{ width: `${weatherData.main.humidity}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;