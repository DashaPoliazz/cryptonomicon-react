import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { tickerSliceAction } from "../store/slices/Tickers";

const actions = {
  ...tickerSliceAction,
};

export const useCryptonomiconActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
