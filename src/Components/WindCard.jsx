import { useState, useEffect } from "react";

function WindCard() {
  const [datos, setDatos] = useState(null);
  const [lat, setLat] = useState(-31.4201); // latitud inicial de Córdoba
  const [lon, setLon] = useState(-64.1888); // longitud inicial de Córdoba
  const [ciudad, setCiudad] = useState(""); // Estado para almacenar la ciudad
  const apiKey = '1d3b6bd1d18f1077d117ba209ae6fe06';

  // Obtener la ubicación del usuario
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (error) => {
        console.error("Error obteniendo la ubicación:", error);
      }
    );
  }, []);

  // Obtener datos del clima y la ciudad
  useEffect(() => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setDatos(data);
        setCiudad(data.name); // Almacena el nombre de la ciudad
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [lat, lon]);

  return (
    <div>
      {datos && datos.wind ? (
        <div>
          <h2>Datos del viento</h2>
          <p>Estás ubicado en: {ciudad}</p>
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
