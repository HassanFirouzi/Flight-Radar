import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../../utils/helpers";
import { open } from "../../redux/slices/detail-slice";
import AirportMarker from "./aiport-marker";
import { getFlights } from "../../redux/actions";
import { useEffect } from "react";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flightReducer);
  const { isLoading, info, route, flightId } = useSelector(
    (store) => store.detailReducer,
  );

  // 30 saniyede bir tekrar api'dan güncel verileri al
  useEffect(() => {
    let id;

    const start = () => {
      id = setInterval(() => dispatch(getFlights()), 30000);
    };
    const stop = () => {
      clearInterval(id);
    };

    // sekme arka plandayken isteği durdur, geri gelince
    // güncel veriyi al ve intervalı yeniden başlat
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        dispatch(getFlights());
        start();
      }
    };

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // component ekrandan ayrılınca intervalı durdur
    // componenWillUnmount
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <MapContainer
      className="h-[calc(100vh-63px)]"
      center={[38.948299, 35.424398]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker
          key={flight.flightid}
          position={[flight.lat, flight.lon]}
          icon={getIcon(flight, flightId)}
        >
          <Popup>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Kod: {flight.callsign}</span>
              <button
                onClick={() => dispatch(open(flight.flightid))}
                className="px-4 py-1 border rounded-sm hover:bg-black/10"
              >
                Detay
              </button>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* Kalkış Noktasını İşaretle */}
      {!isLoading && info && info?.airport?.origin && (
        <AirportMarker info={info.airport.origin} title="Kalkış" />
      )}

      {/* İniş Noktasını İşaretle */}
      {!isLoading && info && info?.airport?.destination && (
        <AirportMarker info={info.airport.destination} title="İniş" />
      )}

      {/* Uçağın gittiği yolu çiz */}
      {!isLoading && route && (
        <Polyline positions={route} pathOptions={{ color: "#9a52d5" }} />
      )}
    </MapContainer>
  );
};

export default Map;
