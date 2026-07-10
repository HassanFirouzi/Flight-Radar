import { Marker, Popup } from "react-leaflet";
import c from "../../utils/null-check";

const AiportMarker = ({ info, title }) => {
  return (
    <Marker position={[info?.position?.latitude, info?.position?.longitude]}>
      <Popup>
        <div className="flex flex-col items-center justify-center font-semibold">
          <span className="font-bold text-sm">{title}</span>
          <p>{c(info?.name)}</p>

          <div className="text-zinc-500 text-sm">
            <span>{c(info?.position?.country?.name)}</span> /{" "}
            <span>{c(info?.position?.region?.city)}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default AiportMarker;
