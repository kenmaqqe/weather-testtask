import { Input, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.css";

const Home = () => {
  const [cityName, setCityName] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (cityName.trim()) {
      navigate(`/weather/${cityName}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>🌤️ Weather Finder</h1>
        <p className={styles.subtitle}>
          Type your city and discover the forecast
        </p>
        <div className={styles.searchBox}>
          <Input
            className={styles.input}
            placeholder="Enter city name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            onPressEnter={handleSearch}
            size="large"
          />
          <Button
            type="primary"
            onClick={handleSearch}
            className={styles.button}
            size="large"
            block
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
