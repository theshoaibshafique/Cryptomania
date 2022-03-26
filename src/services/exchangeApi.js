import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
  "X-RapidAPI-Key": "80606b58e8mshaa0b51580f377dfp1a7d19jsn94f4ba09c327",
};

const baseUrl = "https://coingecko.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const exchangeApi = createApi({
  reducerPath: "exchangeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const { useGetExchangesQuery } = exchangeApi;
