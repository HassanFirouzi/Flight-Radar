import c from "../../utils/null-check";

const Airport = ({ airportData }) => {
  return (
    <div className="grid relative grid-cols-2 p-2.5 bg-white/3 rounded-2xl border border-white/8 ">
      <div className="flex flex-col items-center text-center gap-1.5 border-r border-white/10 pr4">
        <h2 className="text-sm">{c(airportData.origin?.code?.iata)}</h2>
        <h3 className="font-bold text-base">
          {c(airportData.origin?.position?.region?.city)}
        </h3>
        <span className="text-xs text-white/60 font-semibold">
          {c(airportData.origin?.timezone?.abbr)}
        </span>
        <span className="text-xs text-white/60 font-semibold">
          {c(airportData.origin?.timezone?.name)}
        </span>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-indigo-400 to-indigo-500 shadow-xl border border-white/20 rounded-full p-1.5">
        <img src="/plane.svg" alt="plane" className="size-5 rotate-45" />
      </div>

      <div className="flex flex-col items-center text-center gap-1.5 border-l border-white/10 pl4">
        <h2 className="text-sm">{c(airportData.destination?.code?.iata)}</h2>
        <h3 className="font-bold text-base">
          {c(airportData.destination?.position?.region?.city)}
        </h3>
        <span className="text-xs text-white/60 font-semibold">
          {c(airportData.destination?.timezone?.abbr)}
        </span>
        <span className="text-xs text-white/60 font-semibold">
          {c(airportData.destination?.timezone?.name)}
        </span>
      </div>
    </div>
  );
};

export default Airport;
