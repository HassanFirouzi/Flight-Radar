import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions";
import { MAX_MISSED_FETCHES } from "../../utils/constants";

const initialState = {
  isLoading: true,
  error: null,
  flights: [],
  currentRequestId: null,
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state, { meta }) => {
      state.isLoading = true;
      state.currentRequestId = meta.requestId;
    });
    builder.addCase(getFlights.rejected, (state, { meta, error }) => {
      // geç gelen/iptal edilen eski bir isteğin cevabıysa yok say
      if (state.currentRequestId !== meta.requestId) return;

      state.isLoading = false;
      state.error = error.message;
      state.currentRequestId = null;
    });
    builder.addCase(getFlights.fulfilled, (state, { meta, payload }) => {
      // en son gönderdiğimiz istek değilse (yani daha yeni bir istek
      // zaten başlamışsa) bu geç gelen cevabı ekrana yansıtma
      if (state.currentRequestId !== meta.requestId) return;

      state.isLoading = false;
      state.error = null;
      state.currentRequestId = null;

      // her fetch'te listeyi olduğu gibi değiştirmek yerine mevcut
      // uçuşlarla birleştiriyoruz: bir uçuş art arda birkaç fetch'te
      // gelmezse (feed gecikmesi, sınırda kalma vb.) haritadan
      // aniden silinmesin, birkaç tur şansı olsun
      const incomingById = new Map(payload.map((f) => [f.flightid, f]));
      const seen = new Set();
      const merged = [];

      for (const existing of state.flights) {
        const incoming = incomingById.get(existing.flightid);
        if (incoming) {
          merged.push({ ...incoming, missedFetches: 0 });
          seen.add(existing.flightid);
        } else {
          const missedFetches = (existing.missedFetches ?? 0) + 1;
          if (missedFetches < MAX_MISSED_FETCHES) {
            merged.push({ ...existing, missedFetches });
          }
        }
      }

      for (const incoming of payload) {
        if (!seen.has(incoming.flightid)) {
          merged.push({ ...incoming, missedFetches: 0 });
        }
      }

      state.flights = merged;
    });
  },
});

export default flightSlice.reducer;
