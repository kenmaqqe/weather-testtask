const API_KEY = "cb4e43033071dfd1849edb484b0f4227";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";

export interface WeatherData {
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  city: string;
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  if (!city) throw new Error("City is empty");

  const geoRes = await fetch(
    `${GEO_URL}?q=${encodeURIComponent(city)},UA&limit=1&appid=${API_KEY}`
  );
  if (!geoRes.ok) throw new Error("Failed to fetch geocoding");
  const geoData = await geoRes.json();
  if (!geoData.length) throw new Error("City not found");

  const { lat, lon, name } = geoData[0];

  const weatherRes = await fetch(
    `${WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!weatherRes.ok) throw new Error("Failed to fetch weather");
  const data = await weatherRes.json();

  return {
    temp: data.main.temp,
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    city: name,
  };
};
