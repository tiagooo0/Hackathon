import { useState, useEffect } from "react";

function WindCard() {
  const [datosClima, setDatosClima] = useState(null);
  const [datosAire, setDatosAire] = useState(null);
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
    const urlClima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(urlClima)
      .then((response) => response.json())
      .then((data) => {
        setDatosClima(data);
        setCiudad(data.name); // Almacena el nombre de la ciudad
      })
      .catch((error) => console.error("Error fetching weather data:", error));

    const urlAire = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(urlAire)
      .then((response) => response.json())
      .then((data) => {
        setDatosAire(data.list[0]); // Obtiene el primer conjunto de datos de calidad del aire
      })
      .catch((error) => console.error("Error fetching air quality data:", error));
  }, [lat, lon]);

  // Función para obtener la calidad del aire basada en el índice
  const getAirQuality = (index) => {
    switch (index) {
      case 1:
        return " Muy Buena";
      case 2:
        return "Buena";
      case 3:
        return "Moderada";
      case 4:
        return "Mala";
      case 5:
        return "Muy mala";
      default:
        return "Desconocido";
    }
  };

  return (
    <div>
      {datosClima && datosClima.wind ? (
        <div>
          <h2>Datos del Viento y Calidad del Aire</h2>
          <p>Estás ubicado en: {ciudad}</p>
          <p>Velocidad del viento: {datosClima.wind.speed} m/s</p>
          <p>Dirección del viento: {datosClima.wind.deg}°</p>
          <p>Temperatura: {(datosClima.main.temp - 273.15).toFixed(2)} °C</p>

          {datosAire ? (
            <div>
              <h3>Calidad del Aire</h3>
              <p>Calidad del Aire: {getAirQuality(datosAire.main.aqi)}</p>
              <p>Concentración de SO₂: {datosAire.components.so2} μg/m³</p>
              <p>Concentración de NO₂: {datosAire.components.no2} μg/m³</p>
              <p>Concentración de PM10: {datosAire.components.pm10} μg/m³</p>
              <p>Concentración de PM2.5: {datosAire.components.pm2_5} μg/m³</p>
              <p>Concentración de O₃: {datosAire.components.o3} μg/m³</p>
              <p>Concentración de CO: {datosAire.components.co} μg/m³</p>
            </div>
          ) : (
            <p>Cargando calidad del aire...</p>
          )}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default WindCard;
