import { configureStore } from "@reduxjs/toolkit";
import { cryptonomiconApi } from "./cryptocompare/cryptocompare.api";
import { tickerSliceReducer } from "./slices/Tickers";

export const store = configureStore({
  reducer: {
    tickersSlice: tickerSliceReducer,
    [cryptonomiconApi.reducerPath]: cryptonomiconApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
