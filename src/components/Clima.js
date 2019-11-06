import React from "react";
const Clima = ({ resultado }) => {
  const { name, main, weather } = resultado;
  if (!name) return null;
  const toDegrees = temp => {
    const kelvin = 273.15;
    return Math.round(temp - kelvin);
  };
  return (
    <div className="card-panel white col s12">
      <div className="clima-panel">
        <h2>Clima en {name}</h2>
        <p>Humedad: {main.humidity}%</p>
        <p>Presion: {main.pressure} hp</p>
        <p className="temepratura">Temperatura: {toDegrees(main.temp)}&#x2103;</p>
        <p>Min: {toDegrees(main.temp_min)}&#x2103; - Max: {toDegrees(main.temp_max)}&#x2103;</p>
        <p>Con: {weather[0].description}</p>
      </div>
    </div>
  );
};
export default Clima;
