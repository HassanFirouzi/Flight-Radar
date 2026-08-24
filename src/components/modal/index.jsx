import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../redux/actions";
import { useEffect } from "react";
import Head from "./head";
import Loader from "../loader";
import Error from "../error";
import Galery from "./galery";
import Airport from "./airport";
import Time from "./time";
import Aircraft from "./aircraft";

const Modal = () => {
  const dispatch = useDispatch();
  const { isLoading, error, info, flightId } = useSelector(
    (store) => store.detailReducer,
  );

  useEffect(() => {
    if (!flightId) return;

    dispatch(getDetail(flightId));
  }, [flightId]);

  if (!flightId) return;

  return (
    <div className="fixed top-0 left-0 h-screen z-9999 flex items-center max-sm:justify-center max-sm:inset-0 max-sm:backdrop-blur-xs">
      <div className="w-72 max-sm:w-[70%] ml-4 gradient text-white rounded-3xl flex flex-col p-3.5 shadow-2xl mt-10">
        <Head isLoading={isLoading} error={error} info={info} />

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          info && (
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex flex-col gap-3">
                <Galery images={info.aircraft.images} />

                <Airport airportData={info.airport} />

                <Time timeData={info.time} />
              </div>

              <Aircraft aircraftData={info.aircraft} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
