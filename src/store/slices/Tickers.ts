import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Types
import { DefaultTicker, InitialState } from "../../types/initialState";

const initialState: InitialState<DefaultTicker> = {
  tickers: [],
  selectedTicker: null,
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
        (ticker) => ticker.id !== action.payload,
      );
    },
    selectTicker: (state, action: PayloadAction<string | null>) => {
      state.selectedTicker = action.payload;
    },
  },
});

export const tickerSliceAction = tickersSlice.actions;
export const tickerSliceReducer = tickersSlice.reducer;
