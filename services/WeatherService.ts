/**
 * Weather Service - Handles API requests to the Laravel backend for weather data
 */
export const fetchWeatherData = async (city: string, units: 'metric' | 'imperial' = 'metric') => {
  try {
    const response = await fetch(`/api/weather?city=${encodeURIComponent(city)}&units=${units}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch weather data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const fetchForecastData = async (city: string, units: 'metric' | 'imperial' = 'metric') => {
  try {
    const response = await fetch(`/api/forecast?city=${encodeURIComponent(city)}&units=${units}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch forecast data');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching forecast data:', error);
    throw error;
  }
};