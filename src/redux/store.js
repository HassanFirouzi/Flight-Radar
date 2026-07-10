import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flight-slice";
import detailReducer from "./slices/detail-slice";

const store = configureStore({ reducer: { flightReducer, detailReducer } });

export default store;
