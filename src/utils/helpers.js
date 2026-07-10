import { divIcon } from "leaflet";

// Harita üzerinde ekrana basılacak iconu oluştur
export const getIcon = (flight, activeFlightId) =>
  divIcon({
    html: `
      <img src="/plane.svg" style="width:30px; transform: rotate(${flight.track - 45}deg)"/>
    `,
    iconSize: [30, 30],
    className: `marker ${activeFlightId && "passive-marker"} ${activeFlightId === flight.flightid && "active-marker"}`,
  });

export const formatDate = (unixTime) => {
  // değer yoksa null döndür
  if (!unixTime || unixTime === 0) return null;

  // saniye formatındaki veriyi milisaniye formatına çevir
  const formatted = new Date(unixTime * 1000);

  // saat ve dakikayı döndür
  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
