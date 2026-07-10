import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/error";
import { COLUMNS } from "../../utils/constants";
import c from "../../utils/null-check";
import { open } from "../../redux/slices/detail-slice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flightReducer);

  // sayfada gösterilecek ilk elemanın dizideki sırası
  const [start, setStart] = useState(0); // 0 - 12 - 24 - 36

  // sayfa başına gösterilecek eleman sayısı
  const limit = 12;

  // sayfada gösterilecek son elemanın dizideki sırası
  const end = start + limit;

  // belirli aralıkta elemanları diziden al
  const currentFlights = flights.slice(start, end);

  // sayfa değişince çalışır
  const handlePageChange = ({ selected }) => {
    // (page-1)*limit formulü ile seçili sayfada gösterilecek ilk elemanı belirle
    setStart(selected * limit);
  };

  if (error) return <Error message={error} />;

  return (
    <div className="min-h-[calc(100vh-63px)] bg-linear-to-br from-[#f5f7fa] to-[#e8ecf1] p-7 flex flex-col gap-6">
      {/* Başlık */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[213547]">Uçuş Listesi</h1>
          <p className="text-sm text-[213547] mt-1">
            Uçuşları liste halinde görüntüle
          </p>
        </div>

        <div className="bg-linear-to-r from-primary to-light text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-md shadow-primary/30">
          {isLoading ? "--" : flights.length} uçuş
        </div>
      </div>

      {/* Tablo */}
      <div className="overflow-x-auto rounded-2xl shadow-lg shadow-black/10">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-linear-to-r from-primary to-dark text-white">
              {COLUMNS.map((item, key) => (
                <th
                  key={key}
                  className="p-4 text-left text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentFlights.map((flight) => (
              <tr
                key={flight.flightid}
                className="whitespace-nowrap transition-all duration-200 hover:bg-pimary/5 hover:scale-[1.0005] hover:shadow-sm"
              >
                <td className="px-4 py-3 text-sm text-text/60 font-mono">
                  {c(flight.flightid)}
                </td>
                <td className="px-4 py-3 text-sm text-text font-mono font-semibold ">
                  {c(flight.callsign)}
                </td>
                <td className="px-4 py-3 text-sm text-text/80">{c(flight.lat)}</td>
                <td className="px-4 py-3 text-sm text-text/80">{c(flight.lon)}</td>
                <td className="px-4 py-3 text-sm text-text/80">
                  {c(flight.track)}°
                </td>
                <td className="px-4 py-3 text-sm text-text/80">
                  {c(flight.speed)} kt
                </td>
                <td className="px-4 py-3 text-sm text-text/80">
                  {c(flight.alt)} ft
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => dispatch(open(flight.flightid))}
                    className="px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/25 rounded-lg"
                  >
                    Detay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-2">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageChange}
          pageRangeDisplayed={8}
          marginPagesDisplayed={0}
          pageCount={Math.ceil(flights.length / limit)}
          renderOnZeroPageCount={null}
          className="pagination"
          pageClassName="page-item"
          previousClassName="page-item"
          nextClassName="page-item"
          pageLinkClassName="page-link"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
          disabledClassName="disabled"
          breakClassName="hidden"
        />
      </div>
    </div>
  );
};

export default List;
