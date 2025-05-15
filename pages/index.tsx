import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import UnitToggle from '../components/UnitToggle';
import CurrentWeather from '../components/CurrentWeather';
import ForecastDay from '../components/ForecastDay';
import WeatherDetails from '../components/WeatherDetails';
import { fetchWeatherData, fetchForecastData } from '../services/WeatherService';
import { WeatherState } from '../interfaces/WeatherTypes';

const Home: React.FC = () => {
  const [state, setState] = useState<WeatherState>({
    currentWeather: null,
    forecast: null,
    loading: false,
    error: null,
    units: 'metric'
  });

  const [city, setCity] = useState('Nairobi'); // Default city

  useEffect(() => {
    if (city) {
      fetchWeatherForCity(city);
    }
  }, [city, state.units]);

  const fetchWeatherForCity = async (cityName: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeatherData(cityName, state.units),
        fetchForecastData(cityName, state.units)
      ]);
      
      setState(prev => ({
        ...prev,
        currentWeather: weatherData,
        forecast: forecastData,
        loading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      }));
    }
  };

  const handleSearch = (cityName: string) => {
    setCity(cityName);
  };

  const handleUnitChange = (units: 'metric' | 'imperial') => {
    setState(prev => ({ ...prev, units }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather application built with NextJS and Laravel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search and Unit Toggle Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="flex justify-end">
              <UnitToggle units={state.units} onChange={handleUnitChange} />
            </div>
          </div>

          {/* Loading and Error States */}
          {state.loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading weather data...</p>
            </div>
          )}

          {state.error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
              <p>{state.error}</p>
            </div>
          )}

          {/* Weather Content */}
          {!state.loading && !state.error && state.currentWeather && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Current Weather */}
              <div className="md:col-span-1">
                <CurrentWeather weatherData={state.currentWeather} units={state.units} />
              </div>

              {/* Forecast Days */}
              <div className="md:col-span-3">
                {/* 3-Day Forecast */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {state.forecast?.dailyForecasts.map((day, index) => (
                    <ForecastDay key={index} forecast={day} units={state.units} />
                  ))}
                </div>

                {/* Weather Details */}
                <WeatherDetails weatherData={state.currentWeather} units={state.units} />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;