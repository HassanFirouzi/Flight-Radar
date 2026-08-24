import { Radar } from "lucide-react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flightReducer);

  return (
    <header className="flex justify-between items-center px-4 py-2.5 backdrop-blur-xl border-b border-white/10 bg-white/5 shadow-sm sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 hover:scale-[1.02]">
        <img src="logo1.png" alt="logo" width={40} className="drop-shadow-md" />
        <h2 className="text-[21px] font-semibold text-text">
          Flight <span className="text-primary">Radar</span>
        </h2>
      </Link>

      <nav className="flex bg-black/10 p-1 rounded-xl gap-0.5">
        <NavLink to="/">
          {({ isActive }) => (
            <button
              className={`px-4 py-1.5 text-sm font-semibold rounded-l-lg border ${isActive ? "bg-linear-to-r from-primary to-light border-transparent text-white shadow-lg shadow-primary/40" : "bg-primary/10 border-primary/30 text-text hover:primary/20 hover:-translate-y-0.5"}`}
            >
              Harita
            </button>
          )}
        </NavLink>
        <NavLink to="/list">
          {({ isActive }) => (
            <button
              className={`px-4 py-1.5 text-sm font-semibold rounded-r-lg border ${isActive ? "bg-linear-to-r from-primary to-light border-transparent text-white shadow-lg shadow-primary/40" : "bg-primary/10 border-primary/30 text-text hover:primary/20 hover:-translate-y-0.5"}`}
            >
              Liste
            </button>
          )}
        </NavLink>
      </nav>

      {/* Durum */}
      <div className="hidden md:flex items-center gap-2">
        <Radar size={15} className={`text-primary`} />
        <h3 className="text-sm text-text/70 font-medium">
          {isLoading ? (
            "Radar çalışıyor.."
          ) : error ? (
            <p title={error}>Hata oluştu!</p>
          ) : (
            `${flights?.length} uçuş bulundu`
          )}
        </h3>
      </div>
    </header>
  );
};

export default Header;
