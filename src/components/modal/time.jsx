import { formatDate } from "../../utils/helpers";
import c from "../../utils/null-check";

const Time = ({ timeData }) => {
  return (
    <div className="grid grid-cols-2 p-2 rounded-2xl bg-white/1 border border-white/8 text-xs font-semibold">
      <div className="flex flex-col gap-0.5 p-2 border-b border-r border-white/10">
        <span className="text-white/80">Planlanan:</span>
        <span>{c(formatDate(timeData?.scheduled?.departure))}</span>
      </div>
      <div className="flex flex-col gap-0.5 p-2 border-b border-white/10">
        <span className="text-white/80">Planlanan:</span>
        <span>{c(formatDate(timeData?.scheduled?.arrival))}</span>
      </div>
      <div className="flex flex-col gap-0.5 p-2 border-r border-white/10">
        <span className="text-white/80">Gerçek:</span>
        <span>{c(formatDate(timeData?.real?.departure))}</span>
      </div>
      <div className="flex flex-col gap-0.5 p-2">
        <span className="text-white/80">Tahmini:</span>
        <span>{c(formatDate(timeData?.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
