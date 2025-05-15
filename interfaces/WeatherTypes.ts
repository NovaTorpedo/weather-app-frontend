export interface CurrentWeather {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  dt: number;
}

export interface ForecastDay {
  date: string;
  min_temp: number;
  max_temp: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

export interface Forecast {
  city: {
    name: string;
    country: string;
  };
  dailyForecasts: ForecastDay[];
}

export interface WeatherState {
  currentWeather: CurrentWeather | null;
  forecast: Forecast | null;
  loading: boolean;
  error: string | null;
  units: 'metric' | 'imperial';
}