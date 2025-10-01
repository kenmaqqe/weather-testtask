import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { fetchWeather, type WeatherData } from "../utils/weatherApi";
import styles from "../styles/weather.module.css";

const getWeatherBackground = (description: string): string => {
  const desc = description.toLowerCase();

  if (desc.includes("clear") || desc.includes("sunny")) {
    return "linear-gradient(135deg, #f6d365 0%, #fda085 100%)";
  } else if (desc.includes("cloud")) {
    return "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)";
  } else if (desc.includes("rain") || desc.includes("drizzle")) {
    return "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)";
  } else if (desc.includes("thunder") || desc.includes("storm")) {
    return "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)";
  } else if (desc.includes("snow")) {
    return "linear-gradient(135deg, #e6dada 0%, #274046 100%)";
  } else if (
    desc.includes("mist") ||
    desc.includes("fog") ||
    desc.includes("haze")
  ) {
    return "linear-gradient(135deg, #bdc3c7 0%, #2c3e50 100%)";
  }

  return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
};

const Weather = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const navigate = useNavigate();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!cityName) return;

    setLoading(true);
    setError("");

    fetchWeather(cityName)
      .then(setWeather)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [cityName]);

  if (loading)
    return (
      <div className={styles.container}>
        <div className={styles.message}>
          <div className={styles.spinner}></div>
          <p>Loading weather data...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <div className={styles.errorCard}>
          <h2>❌ Oops!</h2>
          <p>{error}</p>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate("/")}
            className={styles.backButton}
          >
            Try Another City
          </Button>
        </div>
      </div>
    );

  if (!weather) return null;

  const backgroundGradient = getWeatherBackground(weather.description);

  return (
    <div
      className={styles.container}
      style={{ background: backgroundGradient }}
    >
      <div className={styles.content}>
        <Button
          onClick={() => navigate("/")}
          className={styles.backBtn}
          size="large"
        >
          ← Back
        </Button>

        <div className={styles.weatherCard}>
          <h1 className={styles.cityName}>{weather.city}</h1>

          <div className={styles.mainInfo}>
            <img
              src={weather.icon}
              alt={weather.description}
              className={styles.weatherIcon}
            />
            <h2 className={styles.temperature}>{Math.round(weather.temp)}°C</h2>
          </div>

          <p className={styles.description}>
            {weather.description.charAt(0).toUpperCase() +
              weather.description.slice(1)}
          </p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>💧</span>
              <span className={styles.detailLabel}>Humidity</span>
              <span className={styles.detailValue}>{weather.humidity}%</span>
            </div>

            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>💨</span>
              <span className={styles.detailLabel}>Wind Speed</span>
              <span className={styles.detailValue}>
                {weather.windSpeed} m/s
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
