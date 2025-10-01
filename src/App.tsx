import { BrowserRouter, Routes, Route } from "react-router";
import { Home, Weather } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:cityName" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
