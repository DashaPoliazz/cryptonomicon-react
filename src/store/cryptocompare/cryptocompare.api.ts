import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITicker, ServerResponse } from "../../types/loadAllTickersResponse";

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
  }),
});

export const { useLazyLoadAllTickersQuery, useLoadAllTickersQuery } =
  cryptonomiconApi;
