import { useDispatch } from "react-redux";
import { close } from "../../redux/slices/detail-slice";
import HeadSkeleton from "../loader/head-skeleton";
import c from "../../utils/null-check";

const Head = ({ isLoading, error, info }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between gap-2 bg-linear-to-r from-indigo-500 to-indigo-600 rounded-xl p-2">
      {isLoading || error ? (
        <HeadSkeleton />
      ) : (
        <div className="flex items-center gap-1.5 min-w-0">
          <h3 title="Çağrı İşareti" className="text-base font-bold truncate">
            {c(info?.identification?.callsign)}
          </h3>
          <span title="Uçuş Numarası" className="badge shrink-0">
            {c(info?.identification.number?.default)}
          </span>
          <span title="Uçak Tip Kodu" className="badge shrink-0">
            {c(info?.aircraft?.model?.code)}
          </span>
        </div>
      )}

      <button
        onClick={() => dispatch(close())}
        className="shrink-0 size-6 flex items-center justify-center text-xs bg-black/15 border border-black/30 rounded-lg"
      >
        X
      </button>
    </div>
  );
};

export default Head;
