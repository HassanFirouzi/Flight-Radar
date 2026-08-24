import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Leaflet's default marker icon resolves its image paths off the CSS
// file's own URL, which Vite's production build doesn't preserve — it
// worked in `npm run dev` and broke silently (broken image + "Marker"
// alt text) once actually built. Airport markers use this default icon
// (aircraft markers don't — see utils/helpers.js's getIcon), so
// pointing it at the bundler-resolved image imports fixes it everywhere
// it's used.
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
