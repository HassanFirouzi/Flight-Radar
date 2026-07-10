import { useDispatch } from "react-redux";
import { close } from "../../redux/slices/detail-slice";
import HeadSkeleton from "../loader/head-skeleton";
import c from "../../utils/null-check";

const Head = ({ isLoading, error, info }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-linear-to-r from-indigo-500 to-indigo-600 rounded-xl p-3">
      {isLoading || error ? (
        <HeadSkeleton />
      ) : (
        <div className="flex items-center gap-2">
          <h3 title="Çağrı İşareti" className="text-xl font-bold">
            {c(info?.identification?.callsign)}
          </h3>
          <span title="Uçuş Numarası" className="badge">
            {c(info?.identification.number?.default)}
          </span>
          <span title="Uçak Tip Kodu" className="badge">
            {c(info?.aircraft?.model?.code)}
          </span>
        </div>
      )}

      <button
        onClick={() => dispatch(close())}
        className="py-1 px-3 bg-black/15 border border-black/30 rounded-lg"
      >
        X
      </button>
    </div>
  );
};

export default Head;
