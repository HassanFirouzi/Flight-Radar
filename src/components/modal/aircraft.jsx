import { Plane } from "lucide-react";
import c from "../../utils/null-check";

const Aircraft = ({ aircraftData }) => {
  return (
    <div className="flex gap-2.5 mt-3 p-2.5 rounded-2xl bg-white/3 border border-white/8">
      <div className="bg-linear-to-b from-[#65656565] to-dark rounded-xl shadow py-2 px-2">
        <Plane className="-rotate-45" size={20} />
      </div>

      <div className="flex-1">
        <p className="flex flex-col gap-1 mb-2">
          <span className="text-zinc-300 font-semibold text-sm">Uçak Tipi</span>
          <span className="font-bold">{c(aircraftData?.model?.text)}</span>
        </p>

        <div className="grid grid-cols-2 gap-3 mt-2">
          <p className="flex flex-col gap-1 mb-1">
            <span className="text-zinc-300 font-semibold text-sm">Kuyruk Kodu</span>
            <span className="font-bold">{c(aircraftData?.registration)}</span>
          </p>
          <p className="flex flex-col gap-1 mb-1">
            <span className="text-zinc-300 font-semibold text-sm">Ülke ID</span>
            <span className="font-bold">{c(aircraftData?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
