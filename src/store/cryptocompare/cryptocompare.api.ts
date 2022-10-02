import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITicker, ServerResponse } from "../../types/loadAllTickersResponse";
import { LoadTickerPriceResponse } from "../../types/loadTIckerPriceResponse";

export const cryptonomiconApi = createApi({
  reducerPath: "cryptonomicon/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://min-api.cryptocompare.com",
  }),
  endpoints: (build) => ({
    loadAllTickers: build.query<ITicker[], string>({
      query: (searchQuery: string) => ({
        url: "/data/all/coinlist",
        params: {
          summary: searchQuery,
        },
      }),
      transformResponse: (response: ServerResponse) => response.Data,
    }),
    loadTickerPrice: build.query({
      query: (fromTicker) => ({
        url: "/data/price",
        params: {
          fsym: fromTicker,
          tsyms: "USD",
        },
      }),
      transformResponse: (response: LoadTickerPriceResponse) => response.USD,
    }),
  }),
});

export const {
  useLazyLoadAllTickersQuery,
  useLoadAllTickersQuery,
  useLazyLoadTickerPriceQuery,
} = cryptonomiconApi;
