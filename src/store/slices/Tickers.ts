import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { DefaultTicker, InitialState } from "../../types/initialState";

const initialState: InitialState<DefaultTicker> = {
  tickers: [],
};

export const tickersSlice = createSlice({
  name: "TickersSlice",
  initialState,
  reducers: {
    addTicker: (state, action: PayloadAction<DefaultTicker>) => {
      state.tickers.push(action.payload);
    },
    removeTicker: (state, action: PayloadAction<string>) => {
      state.tickers = state.tickers.filter(
        (ticker) => ticker.name !== action.payload,
      );
    },
  },
});

export const tickerSliceAction = tickersSlice.actions;
export const tickerSliceReducer = tickersSlice.reducer;
