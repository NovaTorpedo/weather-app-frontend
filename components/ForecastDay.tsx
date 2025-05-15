import React from 'react';
import { ForecastDay as ForecastDayType } from '../interfaces/WeatherTypes';
import WeatherIcon from './WeatherIcon';
import { formatTemperature } from '../utils/WeatherUtils';

interface ForecastDayProps {
  forecast: ForecastDayType;
  units: 'metric' | 'imperial';
}

const ForecastDay: React.FC<ForecastDayProps> = ({ forecast, units }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
      <div className="text-gray-600 font-medium mb-2">{forecast.date}</div>
      <WeatherIcon weatherId={forecast.weather.id} className="w-12 h-12 my-2" />
      <div className="text-lg">
        {formatTemperature(forecast.min_temp, units)}-{formatTemperature(forecast.max_temp, units)}
      </div>
    </div>
  );
};

export default ForecastDay;