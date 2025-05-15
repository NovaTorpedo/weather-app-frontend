/**
 * Utility functions for weather data processing
 */

/**
 * Get the appropriate weather icon based on the weather condition ID
 * @param weatherId - Weather condition ID from OpenWeatherMap
 * @returns The icon component name
 */
export const getWeatherIcon = (weatherId: number): string => {
  // Weather condition codes: https://openweathermap.org/weather-conditions
  if (weatherId >= 200 && weatherId < 300) {
    return 'thunderstorm';
  } else if (weatherId >= 300 && weatherId < 400) {
    return 'drizzle';
  } else if (weatherId >= 500 && weatherId < 600) {
    return 'rain';
  } else if (weatherId >= 600 && weatherId < 700) {
    return 'snow';
  } else if (weatherId >= 700 && weatherId < 800) {
    return 'atmosphere';
  } else if (weatherId === 800) {
    return 'clear';
  } else if (weatherId > 800) {
    return 'clouds';
  }
  return 'unknown';
};

/**
 * Format temperature based on the unit system
 * @param temp - Temperature value
 * @param units - Unit system ('metric' or 'imperial')
 * @returns Formatted temperature string
 */
export const formatTemperature = (temp: number, units: 'metric' | 'imperial'): string => {
  const formattedTemp = Math.round(temp);
  const unitSymbol = units === 'metric' ? '°C' : '°F';
  return `${formattedTemp}${unitSymbol}`;
};

/**
 * Format date to display format
 * @param timestamp - Unix timestamp
 * @returns Formatted date string
 */
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

/**
 * Format wind speed based on the unit system
 * @param speed - Wind speed value
 * @param units - Unit system ('metric' or 'imperial')
 * @returns Formatted wind speed string
 */
export const formatWindSpeed = (speed: number, units: 'metric' | 'imperial'): string => {
  const unit = units === 'metric' ? 'km/h' : 'mph';
  // Convert m/s to km/h if metric
  const formattedSpeed = units === 'metric' ? Math.round(speed * 3.6) : Math.round(speed);
  return `${formattedSpeed} ${unit}`;
};