import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header";
import { fetchWeather } from "./api/fetchWeather";
import Loading from "./components/Loading";
import Hourly from "./components/Hourly";

const App = () => {
  const City = lazy(() => import("./components/City"));
  const Current = lazy(() => import("./components/Current"));
  const [value, setValue] = useState("Jalal-Abad");
  const [mode, setMode] = useState(false);
  const [forecast, setForecast] = useState({});
  const classMode = mode ? "Dark" : "Light";
  const hendelCkick = () => {
    setMode(!mode);
    localStorage.getItem("mode", classMode);
  };
  const hendelForm = (data) => {
    setValue(data);
  };

  useEffect(() => {
    fetchWeather("forecast", value)
      .then(({ data }) => {
        setForecast("");
        setForecast(data);
      })

      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, [value]);
  const hour = forecast?.forecast?.forecastday?.[0]?.hour;
  const filteredHours = hour
    ?.filter((el, i) => i % 2 === 0)
    .slice(4, hour.length - 1);

  console.log("data", forecast);

  return (
    <div className={classMode}>
      <div className="container">
        <Header hendelForm={hendelForm} hendelCkick={hendelCkick} mode={mode} />
        <Suspense fallback={<Loading />}>
          {Object.keys(forecast).length > 0 && (
            <>
              <div className="box">
                <City forecast={forecast} />
                <Current forecast={forecast} />
              </div>
              <Hourly filteredHours={filteredHours} />
            </>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
