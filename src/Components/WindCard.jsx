import { useState, useEffect } from "react";

function WindCard() {
  const [datos, setDatos] = useState(null);
  const [lat, setLat] = useState(-31.4201); // latitud de cba
  const [lon, setLon] = useState(-64.1888); // longitud de cba
  const apiKey = '1d3b6bd1d18f1077d117ba209ae6fe06';

  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [lat, lon]);

  return (
    <div>
      {datos && datos.wind ? (
        <div>
          <h2>Datos del viento</h2>
          <p>Velocidad del viento: {datos.wind.speed} m/s</p>
          <p>Dirección del viento: {datos.wind.deg}°</p>
          {/* Convertimos la temperatura de Kelvin a Celsius */}
          <p>Temperatura: {(datos.main.temp - 273.15).toFixed(2)} °C</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default WindCard;
