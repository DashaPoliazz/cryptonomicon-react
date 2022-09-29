import { configureStore } from "@reduxjs/toolkit";
import { tickerSliceReducer } from "./slices/Tickers";

export const store = configureStore({
  reducer: {
    tickers: tickerSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
