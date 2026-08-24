import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

const params = {
  bl_lat: "33.925281",
  bl_lng: "22.546237",
  tr_lat: "44.181115",
  tr_lng: "50.039604",
  limit: "300",
};

export const getFlights = createAsyncThunk(
  "flight/getFlights",
  async () => {
    // api'dan türkye üzerindeki uçuş verilerini al
    const res = await api.get("/list-in-boundary", { params });

    // api'dan gelen dizi içerisinde dizilerden oluşan veriyi nesnelerden oluşan diziye çevirdik
    const formatted = res.data.aircraft.map((i) => ({
      flightid: i[0],
      callsign: i[1],
      lat: i[2],
      lon: i[3],
      track: i[4],
      alt: i[5],
      speed: i[6],
    }));
    // aksiyonun payload'ını return et
    return formatted;
  },
  {
    // önceki istek hâlâ devam ediyorsa yeni istek başlatma
    // (bu, isteklerin sıra dışı tamamlanıp eski verinin
    // güncel veriyi ezmesini önler)
    condition: (_, { getState }) => {
      const { flightReducer } = getState();
      if (flightReducer.currentRequestId) return false;
    },
  },
);

export const getDetail = createAsyncThunk("detail/getDetail", async (flight) => {
  // api isteği at
  const res = await api.get("/detail", { params: { flight } });

  // payload return edilir
  return res.data;
});
